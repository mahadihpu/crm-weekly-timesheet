import React from 'react';
import ManageTable from './ManageTable';
import MiddleBar from './MiddleBar';
import Navbar from './Navbar';
import PracticeTable from './PracticeTable';


const Home = () => {
    return (
        <div>
            <Navbar />
            <MiddleBar />
            <ManageTable />
            {/* <PracticeTable /> */}
        </div>
    );
};

export default Home;