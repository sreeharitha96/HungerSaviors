import React from "react";
import PendingDonorList from "../donor-list-component/pending-donor-list";

const AdminPage = () => {

    return(
        <>
            <h3>Potential Donors to Approve</h3>
            <PendingDonorList status={"Pending"}/>
        </>
    );
};
export default AdminPage;