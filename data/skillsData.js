import { v4 as uuidv4 } from 'uuid';

// Import images
import CSharp from '../public/images/skills/c-sharp.png';
import Swift from '../public/images/skills/swift.png';
import CPP from '../public/images/skills/c++.png';
import Unity from '../public/images/skills/unity.png';
import WP from '../public/images/skills/wordpress.png';
import Shopify from '../public/images/skills/shopify.png';
import Wix from '../public/images/skills/wix.png';
import Adobe from '../public/images/skills/adobe.png';
import GA from '../public/images/skills/google-analytics.png';
import JS from '../public/images/skills/javascript.png';

export const skillsData = [
	{
		id: uuidv4(),
		title: 'C#',
		img: CSharp,
	},
	{
		id: uuidv4(),
		title: 'Swift',
		img: Swift,
	},
	{
		id: uuidv4(),
		title: 'JavaScript',
		img: JS,
	},
	{
		id: uuidv4(),
		title: 'C++',
		img: CPP,
	},
	{
		id: uuidv4(),
		title: 'Unity',
		img: Unity,
	},
	{
		id: uuidv4(),
		title: 'Wordpress',
		img: WP,
	},
	{
		id: uuidv4(),
		title: 'Shopify',
		img: Shopify,
	},
	{
		id: uuidv4(),
		title: 'Wix',
		img: Wix,
	},
	{
		id: uuidv4(),
		title: 'Adobe',
		img: Adobe,
	},
    {
		id: uuidv4(),
		title: 'Google Analytics',
		img: GA,
	},
];
