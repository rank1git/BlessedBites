import { NavLink } from 'react-router-dom'
import { useState } from 'react';
import Item from '../components/Item';

const TermsAndConditons = () => {
	const [activeIndex, setActiveIndex] = useState(0);
  
  return (
		<div class="flex flex-col items-center prose ml-5">
			<div>
				<div className="flex flex-col">
					<NavLink to="/">Back to Home</NavLink>
				</div>
			</div>
			<div className="flex flex-col">
				<Item
					title={'1. Acceptance of Terms'}
					isActive={activeIndex === 0}
					onShow={() => setActiveIndex(0)}
				>
					By accessing, browsing, or using the Blessed Bites website, you acknowledge that you have read, understood, and agreed to these Terms and Conditions, as well as our Privacy Policy.
				</Item>
				<Item
					title={'2. Use of the Website'}
					isActive={activeIndex === 1}
					onShow={() => setActiveIndex(1)}
				>
					You may use Blessed Bites for personal and non-commercial purposes only.
					You agree not to copy, distribute, or modify any content on this website without our prior written consent.
					You are responsible for ensuring that your use of the website complies with applicable laws and regulations.
				</Item>
				<Item
					title={'3. Account Registration'}
					isActive={activeIndex === 2}
					onShow={() => setActiveIndex(2)}
				>
					To access certain features, you may need to create an account.

					You agree to provide accurate and complete information when registering.
					You are responsible for maintaining the confidentiality of your account information.
					Blessed Bites reserves the right to terminate accounts that violate these terms or engage in prohibited activities.
				</Item>
				<Item
					title={'4. User-Submitted Content'}
					isActive={activeIndex === 3}
					onShow={() => setActiveIndex(3)}
				>
					Users may post recipes, comments, or other content on Blessed Bites. By doing so, you:

					Grant Blessed Bites a non-exclusive, royalty-free, perpetual, and worldwide license to use, display, and distribute your content.
					Represent that your content does not infringe any third-party rights or violate any laws.
					Agree not to post offensive, harmful, or illegal material.
					Blessed Bites reserves the right to remove user-submitted content at its discretion.
				</Item>
				<Item
					title={'5. Intellectual Property'}
					isActive={activeIndex === 4}
					onShow={() => setActiveIndex(4)}
				>
					All content on Blessed Bites, including recipes, images, logos, and design elements, is the property of Blessed Bites or its licensors.
					You may not use our intellectual property without explicit permission.
				</Item>
				<Item
					title={'6. Third-Party Links'}
					isActive={activeIndex === 5}
					onShow={() => setActiveIndex(5)}
				>
					Our website may contain links to third-party websites for your convenience.

					Blessed Bites does not endorse or assume responsibility for the content, privacy policies, or practices of third-party websites.
					Use third-party links at your own risk.
				</Item>
				<Item
					title={
						'7. Disclaimers'
					}
					isActive={activeIndex === 6}
					onShow={() => setActiveIndex(6)}
				>
					Blessed Bites provides recipes and content for informational purposes only.
					We do not guarantee the accuracy, completeness, or suitability of any recipe for your specific dietary needs or preferences.
					Use the website and its content at your own risk.

				</Item>
				<Item
					title={'8. Limitation of Liability'}
					isActive={activeIndex === 7}
					onShow={() => setActiveIndex(7)}
				>
					To the fullest extent permitted by law, Blessed Bites and its team shall not be liable for:

					Any damages resulting from the use or inability to use our website.
					Any errors, omissions, or inaccuracies in the content provided.
				</Item>
				<Item
					title={'9. Changes to the Terms and Conditions'}
					isActive={activeIndex === 8}
					onShow={() => setActiveIndex(8)}
				>
					We may update these Terms and Conditions from time to time.

					Any changes will be posted on this page with the "Effective Date" updated.
					Continued use of the website after changes are made constitutes your acceptance of the new terms.
				</Item>
				<Item
					title={'10. Governing Law'}
					isActive={activeIndex === 9}
					onShow={() => setActiveIndex(9)}
				>
					These Terms and Conditions are governed by the laws of The Sweet 3 Generals. Any disputes shall be resolved exclusively in the courts of Whole Cake Island.
				</Item>
				<Item
					title={'11. Contact Us'}
					isActive={activeIndex === 10}
					onShow={() => setActiveIndex(10)}
				>
					If you have questions or concerns about these Terms and Conditions, please contact us:

					Email: support@blessedbites.com
					Phone: 257-332-4837

				</Item>
			</div>
		</div>
	);
}

export default TermsAndConditons
