import FontAwesomeIcon from '@fortawesome/react-fontawesome';

export default function SocialBadge(props) {

	return(
		<a
			href={props.link}
			target="_blank"
			rel="noopener noreferrer"
			className="text-xl pr-2"
		>
			{props.children}
		</a>
	)
}