import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import css from './Deals.css';

const Deals = props => {
  const { rootClassName, className } = props;
  const classes = classNames(rootClassName || css.root, className);

  // prettier-ignore
  return (
    <div className={classes}>
      <p className={css.lastUpdated}>Last updated: January 11, 2019</p>
      <p className={css.dealButton}><a href="#birthday-deal-section">Birthday Deal</a>&nbsp;&nbsp;&nbsp;<a href="#corporate-deal-section">Corporate Deal</a>&nbsp;&nbsp;&nbsp;<a href="#association-deal-section">Association Deal</a></p>
	  <p>With Whichost, you can easily and quickly find and book unique, inspiring spaces to host your parties, which in itself is already an amazing benefit.</p>
	  <h2 id="birthday-deal-section">BIRTHDAY DEAL</h2>
	  <p>With our Birthday Deal we want to give you a special gift on your birthday where you can win an Amazon Gift Card for up to €200.00 in value. This is the deal:</p>
	  <ol>
	  	<li>Get 100% refund as soon as the booking is confirmed;</li>
	  	<li>Win a €5.00 or €10.00  Amazon Gift Card by reviewing the pub where you hosted your party, plus we’ll add to the gift card €0.50 or €1.00 per additional person for parties of more than 10 people;</li>
	  	<li>Win a €10.00 or €15.00 Amazon Gift Card by reviewing the pub that you recommend to us and where you hosted your party, plus €0.50 or €1.00 per additional person for parties of more than 10 people.</li>
	  </ol>
	  <p>At the bottom of this page you will find examples that explain how each benefit is redeemed.</p>
	  <p>The following Terms & Conditions apply:</p>
	  
	  <h2>Terms & Conditions</h2>
	  <ol>
	  	<li>The Whichost Birthday Deal is currently available only for Ireland and the UK.</li>
	  	<li>You must have your Whichost account fully completed, especially the Birthday field.
	  		<ol>
	  			<li>Users with an incomplete profile and no Birthday date indicated, will not avail of this benefit.</li>
	  		</ol>
	  	</li>
	  	<li>You get a 100% refund as soon as the booking is confirmed, and not within five days of making use of the booking (having the celebration/party) as per the normal procedure.
	  		<ol>
	  			<li>The refund goes back to the same payment method used to request the booking;</li>
	  			<li>The refund might take between 7-15 business days. The speed depends entirely on the financial institution used by the user;</li>
	  			<li>This benefit is only valid for listings that are managed by Whichost.
	  				<ol>
	  					<li>You can find this information at the bottom of the description of the listing. If it`s managed by Whichost it will say: <b>This listing is managed by Whichost.</b></li>
	  				</ol>
	  			</li>
	  		</ol>
	  		
	  	</li>
	  	<li>By booking a pub over the Whichost platform, you get awarded a €5.00 or €10.00 Amazon Gift Card, plus €0.50 or €1.00 per additional person for parties of more than 10 people, for reviewing the pub on Whichost. Conditions:
	  		<ol>
	  			<li>€5.00 plus €0.50 per additional person (parties over 10 people), for parties that will be held on a Thursday, Friday, Saturday or Sunday.</li>
	  			<li>€10.00 plus €1.00 per additional person (parties over 10 people), for parties that will be held on a Monday, Tuesday or Wednesday.
</li>
	  			<li>Only parties of 10 people or more will be considered for this benefit.
</li>
	  			<li>Only the user that booked the pub can post the review.</li>
	  			<li>One review per booked party.</li>
	  			<li>The user must provide proof that the party was held. For this they can use Instagram, Facebook or Twitter as follows:
	  				<ol>
	  					<li>The user can prove that they held the party with an Instagram post:
	  						<ol>
	  						<li>The post must be generated by the same user that booked the party.</li>
	  						<li>The post must be a picture of the party being held at the pub, which means capturing as many of the party participants as possible at the pub.</li>
	  						<li>When posting the picture on Instagram, the user must properly tag the Whichost Instagram account by entering @whichost in the post. This will be the way for us to track.</li>
	  						<li>The post must be kept live on the user’s Instagram account for at least one full week (7 days).</li>
	  						</ol>
	  					</li>
	  					<li>The user can prove that they held the party with a Facebook post:
	  						<ol>
	  						<li>The post must be generated by the same user that booked the party.</li>
	  						<li>The post must contain a picture of the party being held at the pub, which means capturing as many of the party participants as possible at the pub.</li>
	  						<li>When posting the picture on Facebook, the user must properly tag the Whichost Facebook page by entering @whichost in the post and selecting the Whichost Facebook Page from the options that will be presented. For this to happen, the user must Like the Whichost Facebook Page previous to the post. This will be the way for us to track.</li>
	  						<li>The post must be kept live on the user’s Facebook account for at least one full week (7 days).</li>
	  						</ol>
	  					</li>
	  					<li>The user can prove that they held the party with a Twitter post:
	  						<ol>
	  						<li>The post must be generated by the same user that booked the party.</li>
	  						<li>The post must contain a picture of the party being held at the pub, which means capturing as many of the party participants as possible at the pub.</li>
	  						<li>When posting the picture on Twitter, the user must properly tag the Whichost Twitter account by entering @whichostie in the post. For this to happen, the user must follow the Whichost Twitter account previous to the post. This will be the way for us to track.</li>
	  						<li>The post must be kept live on the user’s Twitter account for at least one full week (7 days).</li>
	  						</ol>
	  					</li>
	  				</ol>
	  			</li>
	  			<li>The review must be submitted within one week of making use of the booking.</li>
	  			<li>All Amazon Gift Cards are sent electronically to the user’s email address in their Whichost account.</li>
	  			<li>The additional €0.50 or €1.00 reward per additional person is added to the value of the Amazon Gift Card.</li>
	  			<li>The maximum amount per Amazon Gift Card is €200.00.</li>
	  		</ol>	
	  	</li>
	  	<li>If the pub does not exist in the Whichost platform, you get awarded a €10.00 or €15.00 Amazon Gift Card, plus €0.50 or €1.00 per additional person for parties of more than 10 people, for recommending the pub, booking a party there through Whichost and posting a review. Conditions:
	  		<ol>
	  			<li>€10.00 plus €0.50 per additional person (parties over 10 people), for parties that will be held on a Thursday, Friday, Saturday or Sunday.</li>
	  			<li>€15.00 plus €1.00 per additional person (parties over 10 people), for parties that will be held on a Monday, Tuesday or Wednesday.</li>
	  			<li>Only parties of 10 people or more will be considered for this benefit.</li>
	  			<li>The user that recommended the pub must be the same one that books it through Whichost and celebrates their party there.</li>
	  			<li>The party must be booked at least one full week (7 days) after recommending the pub. That will give Whichost enough time to collect information on the pub and create the listing.</li>
	  			<li>Only the user that booked the pub can post the review.</li>
	  			<li>One review per booked party.</li>
	  			<li>The user must provide proof that the party was held. For this they can use Instagram, Facebook or Twitter as follows:
	  				<ol>
	  					<li>The user can prove that they held the party with an Instagram post:
	  						<ol>
	  							<li>The post must be generated by the same user that booked the party.</li>
	  							<li>The post must be a picture of the party being held at the pub, which means capturing as many of the party participants as possible at the pub.</li>
	  							<li>When posting the picture on Instagram, the user must properly tag the Whichost Instagram account by entering @whichost in the post. This will be the way for us to track.</li>
	  							<li>The post must be kept live on the user’s Instagram account for at least one full week (7 days).</li>
	  						</ol>
	  					</li>
	  					<li>The user can prove that they held the party with a Facebook post:
	  						<ol>
	  							<li>The post must be generated by the same user that booked the party.</li>
	  							<li>The post must contain a picture of the party being held at the pub, which means capturing as many of the party participants as possible at the pub.</li>
	  							<li>When posting the picture on Facebook, the user must properly tag the Whichost Facebook page by entering @whichost in the post and selecting the Whichost Facebook Page from the options that will be presented. For this to happen, the user must Like the Whichost Facebook Page previous to the post. This will be the way for us to track.</li>
	  							<li>The post must be kept live on the user’s Facebook account for at least one full week (7 days).</li>
	  						</ol>
	  					</li>
	  					<li>The user can prove that they held the party with a Twitter post:
	  						<ol>
	  							<li>The post must be generated by the same user that booked the party.</li>
	  							<li>The post must contain a picture of the party being held at the pub, which means capturing as many of the party participants as possible at the pub.</li>
	  							<li>When posting the picture on Twitter, the user must properly tag the Whichost Twitter account by entering @whichostie in the post. For this to happen, the user must follow the Whichost Twitter account previous to the post. This will be the way for us to track.</li>
	  							<li>The post must be kept live on the user’s Twitter account for at least one full week (7 days).</li>
	  						</ol>
	  					</li>
	  				</ol>
	  			</li>
	  			<li>The review must be submitted within one week of making use of the booking.
</li>
	  			<li>All Amazon Gift Cards are sent electronically to the user’s email address in their Whichost account.</li>
	  			<li>The additional €0.50 or €1.00 reward per person is added to the value of the Amazon Gift Card.</li>
	  			<li>The maximum amount per Amazon Gift Card is €200.00.</li>
	  		</ol>
	  	</li>
	  	<li>All Amazon Gift Cards are provided in British Pound Sterling (‎£) and are valid for Amazon UK (www.amazon.co.uk).
	  		<ol>
	  			<li>At the day of issuing the Amazon Gift Card, we will convert your total award, from Euros (€) into British Pound Sterling (‎£) using the conversion rate provided by Google.</li>
	  		</ol>
	  	</li>
	  	<li>This Whichost benefit does not accumulate with any other deals, promotions or benefits that Whichost may provide at any time.</li>
	  	<li>Whichost users can avail this benefit only once per year.</li>
	  	<li>Whichost reserves the right to change these terms and conditions at any time without prior notice. In the event that any changes are made, the revised terms and conditions shall be published immediately.</li>
	  </ol>	
	  <h2>Examples</h2>
	  <p>Below you will find examples of each of the benefits and how to avail them.</p>
	  <ol>
	  	<li><b>Example explaining how to avail the 100% refund benefit (pub XYZ is only used as a reference):</b>
	  		<ol>
	  			<li>Aoife registers to Whichost.</li>
	  			<li>Aoife completes her profile and indicates her birthday in it.</li>
	  			<li>Aoife requests a booking at pub XYZ that is managed by Whichost, to celebrate her birthday.</li>
	  			<li>Pub XYZ confirms the booking.</li>
	  			<li>Aoife’s 100% refund is triggered as soon as pub XYZ confirms the booking.</li>
	  		</ol>
	  	</li>
	  	<li><b>Example explaining how to avail the €5.00 - €10.00, plus €0.50 or €1.00 per additional person for parties of more than 10 people, Amazon Gift Card benefit by posting on Instagram/Facebook/Twitter:</b>
	  		<ol>
	  			<li>Aoife registers to Whichost.</li>
	  			<li>Aoife completes her profile and indicates her birthday in it.</li>
	  			<li>Aoife requests a booking for a party of 20 people at a pub through Whichost, to celebrate her birthday</li>
	  			<li>The pub confirms the booking.</li>
	  			<li>Aoife’s 100% refund is triggered as soon as the pub confirms the booking (if the listing is managed by Whichost).</li>
	  			<li>Aoife enjoys the party and while at it she posts an image of the party on her Instagram/Facebook/Twitter account, tagging Whichost in that post.</li>
	  			<li>Aoife keeps the post live for at least a full week (7 days) on her Instagram/Facebook/Twitter account.</li>
	  			<li>Aoife writes a review for the pub on Whichost.</li>
	  			<li>Whichost checks the Instagram/Facebook/Twitter post and the bookings in the platform and if everything matches, they send:
	  				<ol>
	  					<li>A €10.00 (€5.00 + €0.50 per additional person (10)) Amazon Gift Card to Aoife’s email address (the one registered in her Whichost account) if the party was held on a Thursday, Friday, Saturday or Sunday.</li>
	  					<li>A €20.00 (€10.00 + €1.00 per additional person (10)) Amazon Gift Card to Aoife’s email address (the one registered in her Whichost account) if the party was held on a Monday, Tuesday or Wednesday.</li>
	  				</ol>
	  			</li>
	  			<li>If the information does not match, for any reason, Whichost will contact Aoife to clarify.</li>
	  		</ol>
	  	</li>
	  	<li><b>Example explaining how to avail the €10.00 - €15.00, plus €0.50 or €1.00 per additional person for parties of more than 10 people, Amazon Gift Card benefit by posting on Instagram/Facebook/Twitter (pub ABC is only used as a reference):</b>
	  		<ol>
	  			<li>Aoife registers to Whichost.</li>
	  			<li>Aoife completes her profile and indicates her birthday in it.</li>
	  			<li>Aoife recommends a pub ABC to Whichost through the ‘Recommend a pub’ form inside Whichost.</li>
	  			<li>Whichost adds the pub ABC to the platform and replies to Aoife confirming she can now book the party.</li>
	  			<li>Aoife requests a booking for a party of 20 people at pub ABC through Whichost, to celebrate her birthday.</li>
	  			<li>The pub confirms the booking.</li>
	  			<li>Aoife’s 100% refund is triggered as soon as the pub confirms the booking (if the listing is managed by Whichost).</li>
	  			<li>Aoife enjoys the party and while at it she posts an image of the party on her Instagram/Facebook/Twitter account, tagging Whichost in that post.</li>
	  			<li>Aoife keeps the post live for at least a full week (7 days) on her Instagram/Facebook/Twitter account.</li>
	  			<li>Aoife writes a review for the pub on Whichost.</li>
	  			<li>Whichost checks the Instagram/Facebook/Twitter post and the bookings in the platform and if everything matches, they send:
	  				<ol>
	  					<li>A €15.00 (€10.00 + €0.50 per additional person (10)) Amazon Gift Card to Aoife’s email address (the one registered in her Whichost account) if the party was held on a Thursday, Friday, Saturday or Sunday.</li>
	  					<li>A €25.00 (€15.00 + €1.00 per additional person (10)) Amazon Gift Card to Aoife’s email address (the one registered in her Whichost account) if the party was held on a Monday, Tuesday or Wednesday.</li>
	  				</ol>
	  			</li>
	  			<li>If the information does not match, for any reason, Whichost will contact Aoife to clarify.</li>
	  		</ol>
	  	</li>
	  </ol>
	  <h2 id="corporate-deal-section">CORPORATE DEAL</h2>
	  <p>With Whichost, you can easily and quickly find and book unique, inspiring pubs to host your parties, which in itself is already an amazing benefit. With our Corporate Deal we want to bring more benefits to your company by partnering with you, to give your employees more special benefits.</p>
	  <p>Please contact us on <a href="mailto:deals@whichost.com">deals@whichost.com</a> and we will be more than happy to have a chat with you and provide you detailed information about our Whichost Corporate Deal.</p>
	  <h2 id="association-deal-section">ASSOCIATION DEAL</h2>
	  <p>By using Whichost, members of any association get more exposure, more parties, more & new customers and can easily manage everything from their mobile device, tablet or PC. However, we want to expand our benefits for your association by partnering with you to give your members more special benefits.</p>
	  <p>Please contact us on <a href="mailto:deals@whichost.com">deals@whichost.com</a> and we will be more than happy to have a chat with you and provide you detailed information about our Whichost Association Deal.</p>
    </div>
  );
};

Deals.defaultProps = {
  rootClassName: null,
  className: null,
};

const { string } = PropTypes;

Deals.propTypes = {
  rootClassName: string,
  className: string,
};

export default Deals;
