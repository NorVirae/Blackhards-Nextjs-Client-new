import DashboardNavigation from "../header/DashboardNavigation";
import { useEffect, useState } from "react";
import Pagination1 from "@/components/section/Pagination1";
import ManageProjectCard from "../card/ManageProjectCard";
import ProposalModal1 from "../modal/ProposalModal1";
import DeleteModal from "../modal/DeleteModal";
import Link from "next/link";
import { links } from "@/data/links";
import { useQuery } from "@apollo/client";
import { IGameTitleGQL } from "@/types";
import { USER_GAME_TITLES } from "@/graphql";

const tab = [
  "Published Games",
  "Drafts",
  "Pending",
];

export default function ManageGameInfo() {
  const [selectedTab, setSelectedTab] = useState(0);
  const { data, loading, error } = useQuery<{ userGameTitles: [IGameTitleGQL] }>(USER_GAME_TITLES, {
    variables: {
      skip: 0,
      take: 2,
      developerEmail: "norbertmbafrank@gmail.com"
    }
  });
  useEffect(() => {
    console.log(data, "DATA")
  }, [loading, data])
  return (
    <>
      <div className="dashboard__content hover-bgc-color">
        <div className="row pb40">
          <div className="col-lg-12">
            <DashboardNavigation />
          </div>
          <div className="col-lg-9">
            <div className="dashboard_title_area">
              <h2>Manage Games</h2>
              <p className="text">Lorem ipsum dolor sit amet, consectetur.</p>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="text-lg-end">
              <Link
                href={links.publishGame}
                className="ud-btn btn-dark default-box-shadow2"
              >
                Create Project
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
                          <th scope="col">Genre</th>
                          <th scope="col">Cost/Package Type</th>
                          <th scope="col">Actions</th>
                        </tr>
                      </thead>
                      <tbody className="t-body">
                        {
                          data && data.userGameTitles ?
                            data.userGameTitles.map((item, i) => {
                              return (
                                <ManageProjectCard gametitle={item} key={i} />

                              )
                            }) : null
                        }
                         {/* {Array(7)
                           .fill(7)
                           .map((_, i) => (
                             <ManageProjectCard key={i} />
                           ))} */}
                      </tbody>
                    </table>
                    <div className="mt30">
                      <Pagination1 />
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
                        {Array(7)
                          .fill(7)
                          .map((_, i) => (
                            <ManageProjectCard key={i} />
                          ))}
                      </tbody>
                    </table>
                    <div className="mt30">
                      <Pagination1 />
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
                        {Array(7)
                          .fill(7)
                          .map((_, i) => (
                            <ManageProjectCard key={i} />
                          ))}
                      </tbody>
                    </table>
                    <div className="mt30">
                      <Pagination1 />
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
                        {Array(7)
                          .fill(7)
                          .map((_, i) => (
                            <ManageProjectCard key={i} />
                          ))}
                      </tbody>
                    </table>
                    <div className="mt30">
                      <Pagination1 />
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
                        {Array(7)
                          .fill(7)
                          .map((_, i) => (
                            <ManageProjectCard key={i} />
                          ))}
                      </tbody>
                    </table>
                    <div className="mt30">
                      <Pagination1 />
                    </div>
                  </div>
                )}
                {selectedTab === 5 && (
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
                        {Array(7)
                          .fill(7)
                          .map((_, i) => (
                            <ManageProjectCard key={i} />
                          ))}
                      </tbody>
                    </table>
                    <div className="mt30">
                      <Pagination1 />
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
