import { useState } from 'react'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { useForm } from 'react-hook-form'
import api from 'instance'
import { Badge, Button, Container, Divider, Flex, FormControl, FormErrorMessage, FormLabel, IconButton, Input, Td, Text, Tr, useDisclosure, useToast } from '@chakra-ui/react'
import { FiEdit2, FiTrash2 } from 'react-icons/fi'
import Table from 'components/_table'
import Card from 'components/_card'
import Modal from 'components/_modal'
import Toast from 'components/_toast'
import { month } from 'functions/month'
import { h12 } from 'functions/time'

const Meetings = () => {
	const queryClient = useQueryClient()
	const { data: meetings, isFetched: isMeetingsFetched } = useQuery(['meetings'], () => api.all('/meetings'))
	const toast = useToast()

	const deleteMutation = useMutation((data) => api.remove('/meetings', data.id), {
		onSuccess: () => {
			queryClient.invalidateQueries('meetings')

			toast({
				position: 'top',
				duration: 3000,
				render: () => <Toast title="Success" description="Meeting deleted succesfully." />
			})
		}
	})

	const onDelete = (id) => {
		deleteMutation.mutate({
			id: id
		})
	}

	return (
		<Container>
			<Flex direction="column" gap={6}>
				<Flex justify="space-between" align="center" gap={6}>
					<Text fontSize={32} fontWeight={800} color="accent-1">
						Meetings
					</Text>
				</Flex>

				<Card>
					<Table
						data={meetings}
						fetched={isMeetingsFetched}
						th={['ID', 'Title', 'Schedule', 'Created', 'Updated', '']}
						td={(meeting) => (
							<Tr key={meeting._id}>
								<Td>
									<Badge variant="tinted" colorScheme="brand">
										#{meeting._id.slice(15, 30).toUpperCase()}
									</Badge>
								</Td>

								<Td>
									<Text textTransform="capitalize">{meeting.title}</Text>
								</Td>

								<Td>
									<Text>
										{month[Number(meeting.schedule.split('T')[0].split('-')[1]) - 1] + ' ' + meeting.schedule.split('T')[0].split('-')[2] + ', ' + meeting.schedule.split('T')[0].split('-')[0]} - {h12(meeting.schedule.split('T')[1])}
									</Text>
								</Td>

								<Td>
									<Text>{month[meeting.created.split(',')[0].split('/')[0] - 1] + ' ' + meeting.created.split(',')[0].split('/')[1] + ', ' + meeting.created.split(',')[0].split('/')[2]}</Text>
								</Td>

								<Td>
									<Text>{month[meeting.updated.split(',')[0].split('/')[0] - 1] + ' ' + meeting.updated.split(',')[0].split('/')[1] + ', ' + meeting.updated.split(',')[0].split('/')[2]}</Text>
								</Td>
							</Tr>
						)}
						filters={(data, watch) => {
							return data.filter((data) =>
								['_id', 'title', 'schedule'].some((key) =>
									data[key]
										.toString()
										.toLowerCase()
										.includes(watch('search') && watch('search').toLowerCase())
								)
							)
						}}
					/>
				</Card>
			</Flex>
		</Container>
	)
}

export default Meetings
