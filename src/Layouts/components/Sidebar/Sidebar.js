import classNames from 'classnames/bind';
import styles from './Sidebar.module.scss';
import config from '~/config';
import Menu, { MenuItem } from './Menu';
import {
    HomeActiveIcon,
    HomeIcon,
    LiveActiveIcon,
    LiveIcon,
    UserGroupActiveIcon,
    UserGroupIcon,
} from '~/components/Icons';
import SuggestedAccounts from '~/components/SuggestedAccounts';
import * as userService from '~/services/userService';
import { useEffect, useState } from 'react';

const cx = classNames.bind(styles);

const INIT_PAGE = 1;
const PER_PAGE = 5;

function SideBar() {
    const [page, setPage] = useState(INIT_PAGE);
    const [suggestedUsers, setSuggestedUsers] = useState([]);

    useEffect(() => {
        userService
            .getSuggested({ page, perPage: PER_PAGE })
            .then((data) => {
                setSuggestedUsers((prevUsers) => [...prevUsers, ...data]);
            })
            .catch((error) => {
                console.log(error);
            });
    }, [page]);

    const handleSeeAll = () => {
        setPage(page + 1);
    };

    return (
        <div className={cx('wrapper')}>
            <Menu>
                <MenuItem
                    title="For Your"
                    to={config.routes.home}
                    icon={<HomeIcon />}
                    activeIcon={<HomeActiveIcon />}
                />
                <MenuItem
                    title="Following"
                    to={config.routes.following}
                    icon={<UserGroupIcon />}
                    activeIcon={<UserGroupActiveIcon />}
                />
                <MenuItem title="Live" to={config.routes.live} icon={<LiveIcon />} activeIcon={<LiveActiveIcon />} />
            </Menu>
            <SuggestedAccounts label="Suggested accounts" data={suggestedUsers} onViewChange={handleSeeAll} />
            <SuggestedAccounts label="Following accounts" />
        </div>
    );
}

export default SideBar;
