import { useNavigate } from 'react-router-dom';
import '../App.css';
import GridViewRoundedIcon from '@mui/icons-material/GridViewRounded';
import AssignmentTurnedInOutlinedIcon from '@mui/icons-material/AssignmentTurnedInOutlined';
import EventAvailableRoundedIcon from '@mui/icons-material/EventAvailableRounded';
import LocalMallRoundedIcon from '@mui/icons-material/LocalMallRounded';
import MarkChatUnreadOutlinedIcon from '@mui/icons-material/MarkChatUnreadOutlined';
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import HelpOutlineRoundedIcon from '@mui/icons-material/HelpOutlineRounded';

function Sidebar() {
	const SidebarData = [
		{
			title: 'Dashboard',
			icon: <GridViewRoundedIcon />,
			link: '/dashboard',
		},
		{
			title: 'Lab Test',
			icon: <AssignmentTurnedInOutlinedIcon />,
			link: '/lab-test',
		},
		{
			title: 'Appointment',
			icon: <EventAvailableRoundedIcon />,
			link: '/appointment',
		},
		{
			title: 'Medicine Order',
			icon: <LocalMallRoundedIcon />,
			link: '/order',
		},
		{
			title: 'Message',
			icon: <MarkChatUnreadOutlinedIcon />,
			link: '/message',
		},
		{
			title: 'Payment',
			icon: <AccountBalanceWalletOutlinedIcon />,
			link: '/payment',
		},
		{
			title: 'Settings',
			icon: <SettingsOutlinedIcon />,
			link: '/settings',
		},
	];



	let navigate = useNavigate();
	let handlenav = (data) => {
		navigate(`${data}`);
	};

	return (
		<div className='Sidebar'>
			<div className='sidebar-container'>
				<h1 className='heading'>Guvi Sales</h1>
				<ul className='SidebarList'>
					{SidebarData.map((e, i) => {
						const iconComponent = getIconComponent(e.title);
						return (
							<li className='row' key={i} onClick={() => handlenav(e.link)}>
								<div className='icon'>{iconComponent}</div>
								<div className='title'>{e.title}</div>
							</li>
						);
					})}
				</ul>
			</div>

			<div className='support'>
				<div className="icon-support"><HelpOutlineRoundedIcon/></div>
				<div className="title-support">Help</div>
			</div>
		</div>
	);
}

function getIconComponent(title) {
	switch (title) {
		case 'Dashboard':
			return <GridViewRoundedIcon />;
		case 'Lab Test':
			return <AssignmentTurnedInOutlinedIcon />;
		case 'Appointment':
			return <EventAvailableRoundedIcon />;
		case 'Medicine Order':
			return <LocalMallRoundedIcon />;
		case 'Message':
			return <MarkChatUnreadOutlinedIcon />;
		case 'Payment':
			return <AccountBalanceWalletOutlinedIcon />;
		case 'Settings':
			return <SettingsOutlinedIcon />;
		default:
			return null; // Return null for unknown titles
	}
}

export default Sidebar;
