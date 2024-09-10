import DashboardNavigation from "../header/DashboardNavigation";
import { useState } from "react";
import Pagination from "@/components/section/Pagination";
import ManageAuctionCard from "../card/ManageAuctionCard";
import { manageService } from "@/data/dashboard";
import ProposalModal1 from "../modal/ProposalModal1";
import DeleteModal from "../modal/DeleteModal";
import Link from "next/link";

const tab = [
  "Active Auctions",
  "Bids",
  "Pending",
  "Canceled Auctons",
  "Watch List"

];

export default function ManageAuctionInfo() {
  const [selectedTab, setSelectedTab] = useState(0);

  return (
    <>
      <div className="dashboard__content hover-bgc-color">
        <div className="row pb40">
          <div className="col-lg-12">
            <DashboardNavigation />
          </div>
          <div className="col-lg-9">
            <div className="dashboard_title_area">
              <h2>Manage Auctions</h2>
              <p className="text">All your Auctions and bids in one place</p>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="text-lg-end">
              <Link
                href="/user/create-auction"
                className="ud-btn btn-dark default-box-shadow2"
              >
                Start Auction
                <i className="fal fa-arrow-right-long" />
              </Link>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-xl-12">
            <div className="ps-widget bgc-white bdrs4 p30 mb30 overflow-hidden position-relative">
              <div className="navtab-style1">
                <nav>
                  <div className="nav nav-tabs mb30">
                    {tab.map((item, i) => (
                      <button
                        key={i}
                        className={`nav-link fw500 ps-0 ${selectedTab == i ? "active" : ""
                          }`}
                        onClick={() => setSelectedTab(i)}
                      >
                        {item}
                      </button>
                    ))}
                  </div>
                </nav>
                {selectedTab === 0 && (
                  <div className="packages_table table-responsive">
                    <table className="table-style3 table at-savesearch">
                      <thead className="t-head">
                        <tr>
                          <th scope="col">Title</th>
                          <th scope="col">Category</th>
                          <th scope="col">Type/Cost</th>
                          <th scope="col">Actions</th>
                        </tr>
                      </thead>
                      <tbody className="t-body">
                        {manageService.map((item, i) => (
                          <ManageAuctionCard key={i} data={item} />
                        ))}
                      </tbody>
                    </table>
                    <div className="mt30">
                      <Pagination />
                    </div>
                  </div>
                )}
                {selectedTab === 1 && (
                  <div className="packages_table table-responsive">
                    <table className="table-style3 table at-savesearch">
                      <thead className="t-head">
                        <tr>
                          <th scope="col">Title</th>
                          <th scope="col">Category</th>
                          <th scope="col">Type/Cost</th>
                          <th scope="col">Actions</th>
                        </tr>
                      </thead>
                      <tbody className="t-body">
                        {manageService.slice(0, 4).map((item, i) => (
                          <ManageAuctionCard key={i} data={item} />
                        ))}
                      </tbody>
                    </table>
                    <div className="mt30">
                      <Pagination />
                    </div>
                  </div>
                )}
                {selectedTab === 2 && (
                  <div className="packages_table table-responsive">
                    <table className="table-style3 table at-savesearch">
                      <thead className="t-head">
                        <tr>
                          <th scope="col">Title</th>
                          <th scope="col">Category</th>
                          <th scope="col">Type/Cost</th>
                          <th scope="col">Actions</th>
                        </tr>
                      </thead>
                      <tbody className="t-body">
                        {manageService.slice(0, 3).map((item, i) => (
                          <ManageAuctionCard key={i} data={item} />
                        ))}
                      </tbody>
                    </table>
                    <div className="mt30">
                      <Pagination />
                    </div>
                  </div>
                )}
                {selectedTab === 3 && (
                  <div className="packages_table table-responsive">
                    <table className="table-style3 table at-savesearch">
                      <thead className="t-head">
                        <tr>
                          <th scope="col">Title</th>
                          <th scope="col">Category</th>
                          <th scope="col">Type/Cost</th>
                          <th scope="col">Actions</th>
                        </tr>
                      </thead>
                      <tbody className="t-body">
                        {manageService.slice(0, 4).map((item, i) => (
                          <ManageAuctionCard key={i} data={item} />
                        ))}
                      </tbody>
                    </table>
                    <div className="mt30">
                      <Pagination />
                    </div>
                  </div>
                )}
                {selectedTab === 4 && (
                  <div className="packages_table table-responsive">
                    <table className="table-style3 table at-savesearch">
                      <thead className="t-head">
                        <tr>
                          <th scope="col">Title</th>
                          <th scope="col">Category</th>
                          <th scope="col">Type/Cost</th>
                          <th scope="col">Actions</th>
                        </tr>
                      </thead>
                      <tbody className="t-body">
                        {manageService.slice(0, 5).map((item, i) => (
                          <ManageAuctionCard key={i} data={item} />
                        ))}
                      </tbody>
                    </table>
                    <div className="mt30">
                      <Pagination />
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <ProposalModal1 />
      <DeleteModal />
    </>
  );
}
