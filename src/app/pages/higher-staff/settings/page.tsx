import React from 'react';
import ProtectedRoute from "@/app/utils/Routing/ProtectedRoute";
import Layout from "@/app/widgets/layout/layout";
import ChangePassword from "@/app/components/settings/changePassword/changePassword";

const role = 'higher-staff'
const business_id = ''

const Settings = () => {
    return (
        <div>
            <ProtectedRoute>
                <Layout role={role} business_id={business_id}>
                    <div className='d-flex justify-content-center align-items-center min-vh-100'>
                        <div className='col-lg-5 col-md-9 col-12'>
                            <div className='border rounded shadow p-5 bg-white'>
                                <ChangePassword/>
                            </div>
                        </div>
                    </div>
                </Layout>
            </ProtectedRoute>
        </div>
    );
};

export default Settings;