import FontAwesomeIcon from '@fortawesome/react-fontawesome';

export default function SocialBadge(props) {

	return(
		<a
			href={props.link}
			target="_blank"
			rel="noopener noreferrer"
			className={`text-2xl pr-2 ${"hover:" + props.hoverColor} transition-all`}
		>
			{props.children}
		</a>
	)
}