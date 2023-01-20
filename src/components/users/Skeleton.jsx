
import ContentLoader from 'react-content-loader';
const Skeleton = () => {
	return (
		<ContentLoader
			speed={2}
			width={850}
			height={70}
			viewBox="0 0 500 50"
			backgroundColor="#f3f3f3"
			foregroundColor="#ecebeb">
			<circle cx="25" cy="25" r="25" />
			<rect x="64" y="0" rx="6" ry="6" width="137" height="25" />
			<rect x="64" y="32" rx="6" ry="6" width="183" height="15" />
			<rect x="290" y="12" rx="6" ry="6" width="26" height="26" />
		</ContentLoader>
	);
}

export default Skeleton;



