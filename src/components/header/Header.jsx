import Carousel from '../slide';
import './Header.css'



const Header = () => {
	const slides = [
		{
			src: 'https://cdn.spacetelescope.org/archives/images/wallpaper2/heic2017a.jpg',
			title: 'Hubble’s Crisp New Image of Jupiter and Europa',
			description:
				'This latest image of Jupiter, taken by the NASA/ESA Hubble Space Telescope on 25 August 2020, was captured when the planet was 653 million kilometres from Earth. Hubble’s sharp view is giving researchers an updated weather report on the monster planet’s turbulent atmosphere, including a remarkable new storm brewing, and a cousin of the Great Red Spot changing colour — again. The new image also features Jupiter’s icy moon Europa.',
		},
		{
			src: 'https://cdn.spacetelescope.org/archives/images/wallpaper2/heic1509a.jpg',
			title: 'Tapestry of Blazing Starbirth',
			description:
				'This image is one of the most photogenic examples of the many turbulent stellar nurseries the NASA/ESA Hubble Space Telescope has observed during its 30-year lifetime. The portrait features the giant nebula NGC 2014 and its neighbour NGC 2020 which together form part of a vast star-forming region in the Large Magellanic Cloud, a satellite galaxy of the Milky Way, approximately 163 000 light-years away.',
		},
		{
			src: 'https://cdn.spacetelescope.org/archives/images/wallpaper2/heic1501a.jpg',
			title: 'Westerlund 2 — Hubble’s 25th anniversary image',
			description:
				'This NASA/ESA Hubble Space Telescope image of the cluster Westerlund 2 and its surroundings has been released to celebrate Hubble’s 25th year in orbit and a quarter of a century of new discoveries, stunning images and outstanding science.',
		},
	];


	return (
		<>
			<div className='headerGL'>
				<Carousel slides={slides} />

			</div>
		</>



	);
}

export default Header;