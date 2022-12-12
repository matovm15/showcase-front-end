import { useState } from "react";
import Layout from "../components/dashboard/Layout";
import DashboardSidebar from "../components/dashboard/DashboardSidebar";
import { notes } from "../data/notes";
import Note from "../components/dashboard/Note";
import AddNote from "../components/dashboard/AddNote";
import { DASH_NOTIFICATIONS, profileViews } from "../data/dashNotifications";
import Notifications from "../components/dashboard/Notifications";
import ProfileViews from "../components/dashboard/ProfileViews";
import { useGetProfileQuery } from "../features/profile/profileApiSlice";

const Dashboard = () => {
  const [openNoteForm, setOpenNoteForm] = useState(false);

  const { isLoading, data, isSuccess, isError, error } = useGetProfileQuery(
    undefined,
    {
      refetchOnMountOrArgChange: true,
      pollingInterval: 60000,
      refetchOnReconnect: true,
      refetchOnWindowFocus: true,
    }
  );

  const handleOpenNoteForm = () => {
    setOpenNoteForm(!openNoteForm);
  };
  return (
    <>
      {openNoteForm && <AddNote handleOpenNoteForm={handleOpenNoteForm} />}
      <Layout>
        <div className="dashboard-container">
          <DashboardSidebar />
          <div className="dashboard-content-container" data-simplebar>
            <div className="dashboard-content-inner">
              <div className="dashboard-headline">
                <h3>Howdy, Tom!</h3>
                <span>We are glad to see you again!</span>
                <nav id="breadcrumbs" className="dark">
                  <ul>
                    <li>
                      <a href="#">Home</a>
                    </li>
                    <li>Dashboard</li>
                  </ul>
                </nav>
              </div>

              <div className="fun-facts-container">
                <div className="fun-fact" data-fun-fact-color="#36bd78">
                  <div className="fun-fact-text">
                    <span>Task Bids Won</span>
                    <h4>22</h4>
                  </div>
                  <div className="fun-fact-icon">
                    <i className="icon-material-outline-gavel"></i>
                  </div>
                </div>
                <div className="fun-fact" data-fun-fact-color="#b81b7f">
                  <div className="fun-fact-text">
                    <span>Jobs Applied</span>
                    <h4>4</h4>
                  </div>
                  <div className="fun-fact-icon">
                    <i className="icon-material-outline-business-center"></i>
                  </div>
                </div>
                <div className="fun-fact" data-fun-fact-color="#efa80f">
                  <div className="fun-fact-text">
                    <span>Reviews</span>
                    <h4>28</h4>
                  </div>
                  <div className="fun-fact-icon">
                    <i className="icon-material-outline-rate-review"></i>
                  </div>
                </div>

                <div className="fun-fact" data-fun-fact-color="#2a41e6">
                  <div className="fun-fact-text">
                    <span>This Month Views</span>
                    <h4>987</h4>
                  </div>
                  <div className="fun-fact-icon">
                    <i className="icon-feather-trending-up"></i>
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-xl-8">
                  <div className="dashboard-box main-box-in-row">
                    <div className="headline">
                      <h3>
                        <i className="icon-feather-bar-chart-2"></i> Your
                        Profile Views
                      </h3>
                      <div className="sort-by">
                        <select className="selectpicker hide-tick">
                          <option>Last 6 Months</option>
                          <option>This Year</option>
                          <option>This Month</option>
                        </select>
                      </div>
                    </div>
                    <div className="content">
                      <div className="chart">
                        <ProfileViews data={profileViews} />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4">
                  <div className="dashboard-box child-box-in-row">
                    <div className="headline">
                      <h3>
                        <i className="icon-material-outline-note-add"></i> Notes
                      </h3>
                    </div>
                    <div
                      className="dashboard-boxscrollbar"
                      data-simplebar="init"
                      style={{ maxHeight: "430px" }}
                    >
                      <div
                        className="simplebar-track vertical"
                        style={{ visibility: "visible" }}
                      ></div>
                      <div
                        className="simplebar-scrollbar"
                        style={{
                          visibility: "visible",
                          top: 0,
                          height: "384px",
                        }}
                      ></div>
                      <div
                        className="simplebar-scroll-content"
                        style={{ paddingRight: "17px", marginBottom: "-34px" }}
                      >
                        <div className="content with-padding">
                          {notes.map((note) => (
                            <Note key={note.id} {...note} />
                          ))}
                        </div>
                        <div className="add-note-button">
                          <a
                            href="#small-dialog"
                            onClick={handleOpenNoteForm}
                            className="popup-with-zoom-anim button full-width button-sliding-icon"
                          >
                            Add Note
                            <i className="icon-material-outline-arrow-right-alt"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-xl-6">
                  <div className="dashboard-box">
                    <div className="headline">
                      <h3>
                        <i className="icon-material-baseline-notifications-none"></i>{" "}
                        Notifications
                      </h3>
                      <button
                        className="mark-as-read ripple-effect-dark"
                        data-tippy-placement="left"
                        title="Mark all as read"
                      >
                        <i className="icon-feather-check-square"></i>
                      </button>
                    </div>
                    <div className="content">
                      <ul className="dashboard-box-list">
                        {DASH_NOTIFICATIONS.map((notification) => (
                          <Notifications
                            key={notification.id}
                            {...notification}
                          />
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="col-xl-6">
                  <div className="dashboard-box">
                    <div className="headline">
                      <h3>
                        <i className="icon-material-outline-assignment"></i>{" "}
                        Orders
                      </h3>
                    </div>
                    <div className="content">
                      <ul className="dashboard-box-list">
                        <li>
                          <div className="invoice-list-item">
                            <strong>Professional Plan</strong>
                            <ul>
                              <li>
                                <span className="unpaid">Unpaid</span>
                              </li>
                              <li>Order: #326</li>
                              <li>Date: 12/08/2019</li>
                            </ul>
                          </div>
                          <div className="buttons-to-right">
                            <a
                              href="pages-checkout-page.html"
                              className="button"
                            >
                              Finish Payment
                            </a>
                          </div>
                        </li>
                        <li>
                          <div className="invoice-list-item">
                            <strong>Professional Plan</strong>
                            <ul>
                              <li>
                                <span className="paid">Paid</span>
                              </li>
                              <li>Order: #264</li>
                              <li>Date: 10/07/2019</li>
                            </ul>
                          </div>
                          <div className="buttons-to-right">
                            <a
                              href="pages-invoice-template.html"
                              className="button gray"
                            >
                              View Invoice
                            </a>
                          </div>
                        </li>
                        <li>
                          <div className="invoice-list-item">
                            <strong>Professional Plan</strong>
                            <ul>
                              <li>
                                <span className="paid">Paid</span>
                              </li>
                              <li>Order: #211</li>
                              <li>Date: 12/06/2019</li>
                            </ul>
                          </div>
                          <div className="buttons-to-right">
                            <a
                              href="pages-invoice-template.html"
                              className="button gray"
                            >
                              View Invoice
                            </a>
                          </div>
                        </li>
                        <li>
                          <div className="invoice-list-item">
                            <strong>Professional Plan</strong>
                            <ul>
                              <li>
                                <span className="paid">Paid</span>
                              </li>
                              <li>Order: #179</li>
                              <li>Date: 06/05/2019</li>
                            </ul>
                          </div>
                          <div className="buttons-to-right">
                            <a
                              href="pages-invoice-template.html"
                              className="button gray"
                            >
                              View Invoice
                            </a>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="dashboard-footer-spacer"></div>
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
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};
export default Dashboard;
