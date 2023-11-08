import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCircleQuestion,
    faCoins,
    faEarthAsia,
    faEllipsisVertical,
    faGear,
    faKeyboard,
    faSignOut,
    faUser,
} from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import styles from './Header.module.scss';
import images from '~/assets/images';
import Button from '~/components/Button';
import Menu from '~/components/Popper/Menu';
import { InboxIcon, MessageIcon, UploadIcon } from '~/components/Icons';
import Image from '~/components/Image';
import Search from '../Search';
import { Link } from 'react-router-dom';
import routesConfig from '~/config/routes';

const cx = classNames.bind(styles);

const MENU_ITEMS = [
    {
        icon: <FontAwesomeIcon icon={faEarthAsia} />,
        title: 'English',
        children: {
            title: 'Language',
            data: [
                {
                    type: 'language',
                    code: 'en',
                    title: 'English',
                },
                {
                    type: 'language',
                    code: 'vi',
                    title: 'Tiếng Việt',
                },
            ],
        },
    },
    {
        icon: <FontAwesomeIcon icon={faCircleQuestion} />,
        title: 'Feedback and help',
        to: '/feedback',
    },
    {
        icon: <FontAwesomeIcon icon={faKeyboard} />,
        title: 'Keyboard shortcuts',
    },
];

function Header() {
    const currentUser = true;

    // Handle logic
    const handleMenuChange = (menuItem) => {
        switch (menuItem.type) {
            case 'language':
                // Handle change language
                break;
            default:
        }
    };

    const userMenu = [
        {
            icon: <FontAwesomeIcon icon={faUser} />,
            title: 'View profile',
            to: '/@hoaa',
        },
        {
            icon: <FontAwesomeIcon icon={faCoins} />,
            title: 'Get coins',
            to: '/coin',
        },
        {
            icon: <FontAwesomeIcon icon={faGear} />,
            title: 'Settings',
            to: '/settings',
        },
        ...MENU_ITEMS,
        {
            icon: <FontAwesomeIcon icon={faSignOut} />,
            title: 'Log out',
            to: '/logout',
            separate: true,
        },
    ];

    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                {/* Logo */}
                <Link to={routesConfig.home} className={cx('logo-link')}>
                    <img src={images.logo} alt="Tiktok" />
                </Link>

                {/* Search */}
                <Search />

                <div className={cx('action')}>
                    {currentUser ? (
                        <>
                            <Tippy delay={[0, 50]} content="Upload video" placement="bottom">
                                <button className={cx('action-btn')}>
                                    <UploadIcon />
                                </button>
                            </Tippy>
                            <Tippy delay={[0, 50]} content="Message" placement="bottom">
                                <button className={cx('action-btn')}>
                                    <MessageIcon />
                                </button>
                            </Tippy>
                            <Tippy delay={[0, 50]} content="Inbox" placement="bottom">
                                <button className={cx('action-btn')}>
                                    <InboxIcon />
                                    <span className={cx('badge')}>12</span>
                                </button>
                            </Tippy>
                        </>
                    ) : (
                        <>
                            <Button text>Upload</Button>
                            <Button primary>Log in</Button>
                        </>
                    )}

                    <Menu items={currentUser ? userMenu : MENU_ITEMS} onChange={handleMenuChange}>
                        {currentUser ? (
                            <Image
                                className={cx('user-avatar')}
                                src="https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/0586936ec49ed5745e605e6d275a6061.jpeg?x-expires=1699498800&x-signature=rGoGqq81CStk7KHRBvaXEPC8jdQ%3D"
                                alt="Nguyen Van A"
                                fallback="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAEtklEQVR4Aa3XU9TsWBMG4Gcn6c/2b9u2bdu2bdu2bdu2zbFnjt3JrjGyunvO6Vl9ERfeciXF2y5JIGJDeJhwHUyJIJxxDHx29t9bh9gn/El4j/BPESoRhBvIvoDFA1LMgdFk6Pl+ExGPEx4hfKCSrQlfEjHfK9RwVjpAr4UO3iPi75XskW3lQwnCwO/7oymFp1QirjMyRT0h2i/PdSvZXF8iRpuE/YHNVG3CEcZZz/e+PJU8FOLBz86ZFyp5AOJUsmsLu7f1CsnB2BTTq+Qaidyw7Xh27SQDxseZWaWoiNzfA30RFx2O/z/nupx86StKmw5rW6k4BVjadCidSXZsYusmcaGriPNfSUwuSHt2SIf+SfrPLxifZn6DbrfHC5Xcm+22HysudjMxu6652v01F7u+AgCB8q/fVr3lVkwsUHfVD3y3fK37i7FxgQQ5K3/9GdWHHsfmY5lZIqJlbCGi172bN8mXvb36Fs/R+cIzVb/5VE8e6UzQzafQNnd7rfoGDztFedrXVf7hR9KuHRSF+pr3UD/s/ezeSXcfOU49AnlQEibSUX+Xr/dw+x7+WZ0P3E/xg7dL8+vkEClJ245lbJqVVfka95GQdm7VefOdpB//QFzhMrpP+ybL55WvfFtxgStIh/+d2dWWwf3LMKPoSMgL55YvfSvlK5/GeYDUYG6CqUX27hH1PkxLOzZJv/kBDek3f5OOO0ScBECQ9uxESR6yDBM0DedPrF+g/T2CEw5Vffmluvd+rbx+Ic0j36b45kfl695Gvtg1QfnFV3LYv1k+N+2QaychBBoEkLq15roPla98N8qKqkOiet9DpZMS0fy64kOv1ynHdO/yQt2bP1o66QgkVF98tfINz+L8sxQd6rplcCViv80l5pblkw4AqKaX2VXTPU6+35PVN3gQnXHF1mOkf/yBC19SXrug5lp35bF7lZ9+EeOTqAwuQwjOeAdVqfzzt6TffZW5RVKJODWhauLyN9K93+sEyr//ROfVd+ToTcyOqZ/ySc0176S++/OkQ/+q+OGnWTt3y9jBSRhAFIXir99SvPetnA8ZGcsrIF/mpiCh/OEH+OMmrn1ufnWk8ptvPwUA5CvdWvGNT5ODcLZJ2AIAMbPKubF2vjbQhrT9OADNjR6k+NVX+c+RXGhSc8vHAEhbju47lAoRepsRUglAUZH15srCnOIHH5GOPxzkS11P9y3/UL/o67rv+JfmmnfEqSVYfvUdLEySkcOpB1VfwQ0kACKR9bjP1CLHHKrzghupH/o2caWba+aWufatQELxt5+o3vVEjjyEjfPQNNohCOT2gLCyofjT140d8idgyzGsrvcumXXN6vmlo/6n86JbiEtdR5z/smJi7hSr02F/l/7yE/Y1pyqveydiiied/xfCNdvTsGLXVrZvIjA5z/Qidd1/QVHQ3ceWY9mNDBjD3BKdCZrcbyfYnuIJpwIYagHBiNb37dU5XMFGBK63DEfjhSEW10rYM7w7h/TaYJ49lRy/F244hIWj3JL/WAnvEfFYYWwEPxzDAnt7ioedm/BQ4Z0oRx+OgTRvFJ5UUSLeiz+LeBrFdYgZIFBo+zC1rZSQemkEEC0Ze4g/UryD+AKcCJk1jtgwKmFEAAAAAElFTkSuQmCC"
                            />
                        ) : (
                            <button className={cx('more-btn')}>
                                <FontAwesomeIcon icon={faEllipsisVertical} />
                            </button>
                        )}
                    </Menu>
                </div>
            </div>
        </header>
    );
}

export default Header;
