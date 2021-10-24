import React from 'react'

import Section from '../../components/section/section.component';
import MyAccounts from '../../components/my-accounts/my-accounts.component';

import './dashboard.styles.scss';

const Dashboard = () => {
    return (
        <div className="dashboard__container container">
            <Section title="My accounts" sectionLinkTitle="View all accounts">
                <MyAccounts />
            </Section>
            {/* <Section title="Upcoming expenses" sectionLinkTitle="View all expenses">
                <div>Hey</div>
            </Section> */}
            {/* <Section title="Recent transactions" sectionLinkTitle="View all transactions">
                <div>Hey</div>
            </Section> */}
        </div>
    )
}

export default Dashboard
