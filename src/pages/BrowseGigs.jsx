import Layout from "../components/Layout"

const BrowseGigs = () => {
  return (
    <div>
        <Layout />
        {/* <!-- Page Content
================================================== --> */}
<div className="full-page-container">

	<div className="full-page-sidebar">
		<div className="full-page-sidebar-inner" data-simplebar>
			<div className="sidebar-container">
				
				{/* <!-- Location --> */}
				<div className="sidebar-widget">
					<h3>Location</h3>
					<div className="input-with-icon">
						<div id="autocomplete-container">
							<input id="autocomplete-input" type="text" placeholder="Location" />
						</div>
						<i className="icon-material-outline-location-on"></i>
					</div>
				</div>

				{/* <!-- Category --> */}
				<div className="sidebar-widget">
					<h3>Category</h3>
					<select className="selectpicker default" multiple data-selected-text-format="count" data-size="7" title="All Categories" >
						<option>Admin Support</option>
						<option>Customer Service</option>
						<option>Data Analytics</option>
						<option>Design &amp; Creative</option>
						<option>Legal</option>
						<option>Software Developing</option>
						<option>IT &amp; Networking</option>
						<option>Writing</option>
						<option>Translation</option>
						<option>Sales &amp; Marketing</option>
					</select>
				</div>

				{/* <!-- Keywords --> */}
				<div className="sidebar-widget">
					<h3>Keywords</h3>
					<div className="keywords-container">
						<div className="keyword-input-container">
							<input type="text" className="keyword-input" placeholder="e.g. task title"/>
							<button className="keyword-input-button ripple-effect"><i className="icon-material-outline-add"></i></button>
						</div>
						<div className="keywords-list"></div>
						<div className="clearfix"></div>
					</div>
				</div>

				{/* <!-- Budget --> */}
				<div className="sidebar-widget">
					<h3>Fixed Price</h3>
					<div className="margin-top-55"></div>

					{/* <!-- Range Slider --> */}
					<input className="range-slider" type="text" value="" data-slider-currency="$" data-slider-min="10" data-slider-max="2500" data-slider-step="25" data-slider-value="[50,2500]"/>
				</div>

				{/* <!-- Hourly Rate --> */}
				<div className="sidebar-widget">
					<h3>Hourly Rate</h3>
					<div className="margin-top-55"></div>

					{/* <!-- Range Slider --> */}
					<input className="range-slider" type="text" value="" data-slider-currency="$" data-slider-min="10" data-slider-max="150" data-slider-step="5" data-slider-value="[10,200]"/>
				</div>

				{/* <!-- Tags --> */}
				<div className="sidebar-widget">
					<h3>Skills</h3>

					<div className="tags-container">
						<div className="tag">
							<input type="checkbox" id="tag1"/>
							<label for="tag1">front-end dev</label>
						</div>
						<div className="tag">
							<input type="checkbox" id="tag2"/>
							<label for="tag2">angular</label>
						</div>
						<div className="tag">
							<input type="checkbox" id="tag3"/>
							<label for="tag3">react</label>
						</div>
						<div className="tag">
							<input type="checkbox" id="tag4"/>
							<label for="tag4">vue js</label>
						</div>
						<div className="tag">
							<input type="checkbox" id="tag5"/>
							<label for="tag5">web apps</label>
						</div>
						<div className="tag">
							<input type="checkbox" id="tag6"/>
							<label for="tag6">design</label>
						</div>
						<div className="tag">
							<input type="checkbox" id="tag7"/>
							<label for="tag7">wordpress</label>
						</div>
					</div>
					<div className="clearfix"></div>

					{/* <!-- More Skills --> */}
					<div className="keywords-container margin-top-20">
						<div className="keyword-input-container">
							<input type="text" className="keyword-input" placeholder="add more skills"/>
							<button className="keyword-input-button ripple-effect"><i className="icon-material-outline-add"></i></button>
						</div>
						<div className="keywords-list"></div>
						<div className="clearfix"></div>
					</div>
				</div>
				<div className="clearfix"></div>

				<div className="margin-bottom-40"></div>

			</div>
			{/* <!-- Sidebar Container / End -->

			<!-- Search Button --> */}
			<div className="sidebar-search-button-container">
				<button className="button ripple-effect">Search</button>
			</div>
			{/* <!-- Search Button / End--> */}

		</div>
	</div>
	{/* <!-- Full Page Sidebar / End -->
	
	<!-- Full Page Content --> */}
	<div className="full-page-content-container" data-simplebar>
		<div className="full-page-content-inner">

			<h3 className="page-title">Search Results</h3>

			<div className="notify-box margin-top-15">
				<div className="switch-container">
					<label className="switch"><input type="checkbox" /><span className="switch-button" ></span><span className="switch-text">Turn on email alerts for this search</span></label>
				</div>

				<div className="sort-by">
					<span>Sort by:</span>
					<select className="selectpicker hide-tick">
						<option>Relevance</option>
						<option>Newest</option>
						<option>Oldest</option>
						<option>Random</option>
					</select>
				</div>
			</div>

			{/* <!-- Tasks Container --> */}
			<div className="tasks-list-container tasks-grid-layout margin-top-35">
				
				{/* <!-- Task --> */}
				<a href="/gigs/view-bid" className="task-listing">

					{/* <!-- Job Listing Details --> */}
					<div className="task-listing-details">

						{/* <!-- Details --> */}
						<div className="task-listing-description">
							<h3 className="task-listing-title">Food Delviery Mobile App</h3>
							<ul className="task-icons">
								<li><i className="icon-material-outline-location-on"></i> San Francisco</li>
								<li><i className="icon-material-outline-access-time"></i> 2 minutes ago</li>
							</ul>
						</div>

					</div>

					<div className="task-listing-bid">
						<div className="task-listing-bid-inner">
							<div className="task-offers">
								<strong>$1,000 - $2,500</strong>
								<span>Fixed Price</span>
							</div>
							<span className="button button-sliding-icon ripple-effect">Bid Now <i className="icon-material-outline-arrow-right-alt"></i></span>
						</div>
					</div>
				</a>

				{/* <!-- Task --> */}
				<a href="/gigs/view-bid" className="task-listing">

					{/* <!-- Job Listing Details --> */}
					<div className="task-listing-details">

						{/* <!-- Details --> */}
						<div className="task-listing-description">
							<h3 className="task-listing-title">2000 Words English to German</h3>
							<ul className="task-icons">
								<li><i className="icon-material-outline-location-off"></i> Online Job</li>
								<li><i className="icon-material-outline-access-time"></i> 5 minutes ago</li>
							</ul>
						</div>

					</div>

					<div className="task-listing-bid">
						<div className="task-listing-bid-inner">
							<div className="task-offers">
								<strong>$75</strong>
								<span>Fixed Price</span>
							</div>
							<span className="button button-sliding-icon ripple-effect">Bid Now <i className="icon-material-outline-arrow-right-alt"></i></span>
						</div>
					</div>
				</a>

				{/* <!-- Task --> */}
				<a href="/gigs/view-bid" className="task-listing">

					{/* <!-- Job Listing Details --> */}
					<div className="task-listing-details">

						{/* <!-- Details --> */}
						<div className="task-listing-description">
							<h3 className="task-listing-title">Fix Python Selenium Code</h3>
							<ul className="task-icons">
								<li><i className="icon-material-outline-location-off"></i> Online Job</li>
								<li><i className="icon-material-outline-access-time"></i> 30 minutes ago</li>
							</ul>
						</div>

					</div>

					<div className="task-listing-bid">
						<div className="task-listing-bid-inner">
							<div className="task-offers">
								<strong>$100 - $150</strong>
								<span>Hourly Rate</span>
							</div>
							<span className="button button-sliding-icon ripple-effect">Bid Now <i className="icon-material-outline-arrow-right-alt"></i></span>
						</div>
					</div>
				</a>

				{/* <!-- Task --> */}
				<a href="/gigs/view-bid" className="task-listing">

					{/* <!-- Job Listing Details --> */}
					<div className="task-listing-details">

						{/* <!-- Details --> */}
						<div className="task-listing-description">
							<h3 className="task-listing-title">WordPress Theme Installation</h3>
							<ul className="task-icons">
								<li><i className="icon-material-outline-location-off"></i> Online Job</li>
								<li><i className="icon-material-outline-access-time"></i> 1 hour ago</li>
							</ul>
						</div>

					</div>

					<div className="task-listing-bid">
						<div className="task-listing-bid-inner">
							<div className="task-offers">
								<strong>$100</strong>
								<span>Fixed Price</span>
							</div>
							<span className="button button-sliding-icon ripple-effect">Bid Now <i className="icon-material-outline-arrow-right-alt"></i></span>
						</div>
					</div>
				</a>

				{/* <!-- Task --> */}
				<a href="/gigs/view-bid" className="task-listing">

					{/* <!-- Job Listing Details --> */}
					<div className="task-listing-details">

						{/* <!-- Details --> */}
						<div className="task-listing-description">
							<h3 className="task-listing-title">PHP Core Website Fixes</h3>
							<ul className="task-icons">
								<li><i className="icon-material-outline-location-off"></i> Online Job</li>
								<li><i className="icon-material-outline-access-time"></i> 1 hour ago</li>
							</ul>
						</div>

					</div>

					<div className="task-listing-bid">
						<div className="task-listing-bid-inner">
							<div className="task-offers">
								<strong>$50 - $80</strong>
								<span>Hourly Rate</span>
							</div>
							<span className="button button-sliding-icon ripple-effect">Bid Now <i className="icon-material-outline-arrow-right-alt"></i></span>
						</div>
					</div>
				</a>

				{/* <!-- Task --> */}
				<a href="/gigs/view-bid" className="task-listing">

					{/* <!-- Job Listing Details --> */}
					<div className="task-listing-details">

						{/* <!-- Details --> */}
						<div className="task-listing-description">
							<h3 className="task-listing-title">Adsense Expert</h3>
							<ul className="task-icons">
								<li><i className="icon-material-outline-location-off"></i> Online Job</li>
								<li><i className="icon-material-outline-access-time"></i> 2 hours ago</li>
							</ul>
						</div>

					</div>

					<div className="task-listing-bid">
						<div className="task-listing-bid-inner">
							<div className="task-offers">
								<strong>$70 - $100</strong>
								<span>Hourly Rate</span>
							</div>
							<span className="button button-sliding-icon ripple-effect">Bid Now <i className="icon-material-outline-arrow-right-alt"></i></span>
						</div>
					</div>
				</a>

				{/* <!-- Task --> */}
				<a href="/gigs/view-bid" className="task-listing">

					{/* <!-- Job Listing Details --> */}
					<div className="task-listing-details">

						{/* <!-- Details --> */}
						<div className="task-listing-description">
							<h3 className="task-listing-title">Design a Landing Page</h3>
							<ul className="task-icons">
								<li><i className="icon-material-outline-location-off"></i> Online Job</li>
								<li><i className="icon-material-outline-access-time"></i> 2 hours ago</li>
							</ul>
						</div>

					</div>

					<div className="task-listing-bid">
						<div className="task-listing-bid-inner">
							<div className="task-offers">
								<strong>$500</strong>
								<span>Fixed Price</span>
							</div>
							<span className="button button-sliding-icon ripple-effect">Bid Now <i className="icon-material-outline-arrow-right-alt"></i></span>
						</div>
					</div>
				</a>

				{/* <!-- Task --> */}
				<a href="/gigs/view-bid" className="task-listing">

					{/* <!-- Job Listing Details --> */}
					<div className="task-listing-details">

						{/* <!-- Details --> */}
						<div className="task-listing-description">
							<h3 className="task-listing-title">Website and Logo Redesign</h3>
							<ul className="task-icons">
								<li><i className="icon-material-outline-location-off"></i> Online Job</li>
								<li><i className="icon-material-outline-access-time"></i> 3 hours ago</li>
							</ul>
						</div>

					</div>

					<div className="task-listing-bid">
						<div className="task-listing-bid-inner">
							<div className="task-offers">
								<strong>$850 - $1000</strong>
								<span>Fixed Price</span>
							</div>
							<span className="button button-sliding-icon ripple-effect">Bid Now <i className="icon-material-outline-arrow-right-alt"></i></span>
						</div>
					</div>
				</a>

				{/* <!-- Task --> */}
				<a href="/gigs/view-bid" className="task-listing">

					{/* <!-- Job Listing Details --> */}
					<div className="task-listing-details">

						{/* <!-- Details --> */}
						<div className="task-listing-description">
							<h3 className="task-listing-title">Simple Chrome Extension</h3>
							<ul className="task-icons">
								<li><i className="icon-material-outline-location-off"></i> Online Job</li>
								<li><i className="icon-material-outline-access-time"></i> 3 hours ago</li>
							</ul>
						</div>

					</div>

					<div className="task-listing-bid">
						<div className="task-listing-bid-inner">
							<div className="task-offers">
								<strong>$100</strong>
								<span>Hourly Rate</span>
							</div>
							<span className="button button-sliding-icon ripple-effect">Bid Now <i className="icon-material-outline-arrow-right-alt"></i></span>
						</div>
					</div>
				</a>

			</div>
			{/* <!-- Tasks Container / End -->

			<!-- Pagination --> */}
			<div className="clearfix"></div>
			<div className="pagination-container margin-top-20 margin-bottom-20">
				<nav className="pagination">
					<ul>
						<li className="pagination-arrow"><a href="#" className="ripple-effect"><i className="icon-material-outline-keyboard-arrow-left"></i></a></li>
						<li><a href="#" className="ripple-effect">1</a></li>
						<li><a href="#" className="ripple-effect current-page">2</a></li>
						<li><a href="#" className="ripple-effect">3</a></li>
						<li><a href="#" className="ripple-effect">4</a></li>
						<li className="pagination-arrow"><a href="#" className="ripple-effect"><i className="icon-material-outline-keyboard-arrow-right"></i></a></li>
					</ul>
				</nav>
			</div>
			<div className="clearfix"></div>
			{/* <!-- Pagination / End --> */}
    </div>
			{/* <!-- Footer --> */}
			<div className="small-footer margin-top-15">
				<div className="small-footer-copyrights">
					© 2019 <strong>Hireo</strong>. All Rights Reserved.
				</div>
				<ul className="footer-social-links">
					<li>
						<a href="#" title="Facebook" data-tippy-placement="top">
							<i className="icon-brand-facebook-f"></i>
						</a>
					</li>
					<li>
						<a href="#" title="Twitter" data-tippy-placement="top">
							<i className="icon-brand-twitter"></i>
						</a>
					</li>
					<li>
						<a href="#" title="Google Plus" data-tippy-placement="top">
							<i className="icon-brand-google-plus-g"></i>
						</a>
					</li>
					<li>
						<a href="#" title="LinkedIn" data-tippy-placement="top">
							<i className="icon-brand-linkedin-in"></i>
						</a>
					</li>
				</ul>
				<div className="clearfix"></div>
			</div>
			{/* <!-- Footer / End --> */}
    </div></div>
    </div>
  )
}
export default BrowseGigs