import { USER_GAME_TITLES } from "@/graphql";
import { IGameTitleGQL } from "@/types";
import { timeAgo } from "@/utils";
import { formatPriceToDollars } from "@/utils/priceFormatter";
import { useQuery } from "@apollo/client";
import Link from "next/link";
import { useEffect } from "react";
import { Tooltip } from "react-tooltip";

export default function PurchasedGamesCard({ gametitle, packageType, updatedAt, packageTypeGameLink }: { gametitle?: IGameTitleGQL, packageTypeGameLink: string, packageType: string, updatedAt: string }) {

  return (
    <>
      <tr>
        <th scope="row">
          <div className="freelancer-style1 box-shadow-none row m-0 p-0 align-items-lg-end">
            <div className="d-lg-flex px-0">
              <div className="details mb15-md-md">
                <h5 className="title mb10">
                  <Link href={"/games/game-preview/" + gametitle?._id}>{gametitle?.title}</Link></h5>
                <p className="mb-0 fz14 list-inline-item mb5-sm pe-1">
                  <i className="flaticon-video-file fz16 vam text-thm2 me-1" />{" "}
                  {gametitle?.gamePlays} plays
                </p>
                <p className="mb-0 fz14 list-inline-item mb5-sm pe-1">
                  <i className="flaticon-30-days fz16 vam text-thm2 me-1 bdrl1 pl15 pl0-xs bdrn-xs" />{" "}
                  {timeAgo(updatedAt)}
                </p>
                {/* <p className="mb-0 fz14 list-inline-item mb5-sm text-thm">
                  <i className="flaticon-contract fz16 vam me-1 bdrl1 pl15 pl0-xs bdrn-xs" />{" "}
                  {gametitle?.isOnSale ? "On Sale" : "Pending"}
                </p> */}
              </div>
            </div>
          </div>
        </th>
        <td className="vam">
          <span className="fz15 fw400">{gametitle?.genre.map(stringText => {
            return `${stringText && stringText != "" ? "" + stringText + "," : ""} `
          })}</span>
        </td>
        <td className="vam">
          <span className="fz14 fw400">{packageType}/{gametitle && gametitle.plans && formatPriceToDollars(gametitle.plans[packageType].price)}</span>
        </td>
        <td>
          <div className="d-flex">
            <Link href={packageTypeGameLink}
              className="icon me-2"
              id="edit"
            // data-bs-toggle="modal"
            // data-bs-target="#proposalModal"
            >
              <Tooltip anchorSelect="#download" className="ui-tooltip" place="top">
                Download
              </Tooltip>
              <span className="fas fa-download" />
            </Link>
          </div>
        </td>
      </tr>
    </>
  );
}
