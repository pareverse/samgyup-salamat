import NextLink from 'next/link'
import { useRouter } from 'next/router'
import { signOut } from 'next-auth/react'
import { Avatar, chakra, Flex } from '@chakra-ui/react'
import { FiMenu } from 'react-icons/fi'
import { Logo } from 'components/_logos'

const Header = ({ session, isAdmin, isEmployee, isUser, onSidebarOpen }) => {
	const router = useRouter()

	return (
		<chakra.header bg="system" position="sticky" top={0} outline="1px solid" outlineColor="border" transition=".4s" zIndex={100}>
			<Flex align="center" gap={6} mx="auto" px={6} h="72px" w="full" maxW={1536}>
				<Flex justify="start" align="center" outline="1px solid transparent">
					<Logo />
					{/* <IconButton icon={<FiMenu size={16} />} onClick={onSidebarOpen} /> */}
				</Flex>

				<Flex flex={1} justify="center" align="center" outline="1px solid transparent"></Flex>

				<Flex justify="end" align="center" outline="1px solid transparent">
					<Avatar as="button" h={10} w={10} name={session.user.name} src={session.user.image} onClick={() => router.push('/profile')} />
				</Flex>
			</Flex>
		</chakra.header>
	)
}

export default Header
