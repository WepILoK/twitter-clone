import {makeStyles, Theme} from "@material-ui/core";
import grey from "@material-ui/core/colors/grey";


export const useHomeStyles = makeStyles((theme: Theme) => ({
    wrapper: {
        height: '100vh',
    },
    logo: {
        margin: '10px 0',
    },
    logoIcon: {
        fontSize: 36,
    },
    sideMenuList: {
        position: 'sticky',
        top: 0,
        listStyle: 'none',
        padding: 0,
        margin: 0,
        maxWidth: 230,
    },
    sideMenuListItem: {
        cursor: 'pointer',
        '&:hover': {
            '& div': {
                backgroundColor: 'rgb(29, 161, 242, 0.1)',
                '& h6, svg path': {
                    color: theme.palette.primary.main
                }
            }
        },
        '& div': {
            display: 'inline-flex',
            alignItems: 'center',
            position: 'relative',
            padding: '0 25px 0 20px',
            borderRadius: 30,
            height: 50,
            marginBottom: 15,
            transition: 'background-color 0.1s ease-in-out',
        }
    },
    sideMenuListItemLabel: {
        fontWeight: 700,
        fontSize: 20,
        marginLeft: 15,
    },
    sideMenuListItemIcon: {
        fontSize: 32,
        marginLeft: -5,
    },
    sideMenuTweetButton: {
        padding: theme.spacing(3.2),
        marginTop: theme.spacing(2),
    },
    tweetsCentered: {
        marginTop: 50,
        textAlign: 'center',
    },
    tweetWrapper: {
        color: 'inherit',
        textDecoration: 'none',
    },
    tweetsWrapper: {
        borderRadius: 0,
        height: '100%',
        borderBottom: 0,
        borderTop: 0,
    },
    tweetsHeader: {
        display: 'flex',
        alignItems: 'center',
        flex: 1,
        borderTop: 0,
        borderLeft: 0,
        borderRight: 0,
        borderRadius: 0,
        padding: '10px 15px',
        '& h6': {
            fontWeight: 800,
        }
    },
    tweetsHeaderUser: {
        display: 'flex',
        alignItems: 'center',
    },
    tweet: {
        display: 'flex',
        alignItems: 'flex-start',
        paddingTop: 15,
        paddingLeft: 20,
        cursor: 'pointer',
        '&:hover': {
            backgroundColor: 'rgb(245, 248, 250)',
        },
    },
    tweetAvatar: {
        width: theme.spacing(6.5),
        height: theme.spacing(6.5),
        marginRight: 15,
    },
    tweetHeader: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    tweetContent: {
        flex: 1
    },
    tweetsHeaderBackButton: {
        marginRight: 20,
    },
    tweetFooter: {
        display: 'flex',
        position: 'relative',
        left: -13,
        justifyContent: 'space-between',
        maxWidth: 450,
    },
    tweetUserName: {
        color: grey[500]
    },
    fullTweet: {
        padding: 22,
    },
    fullTweetText: {
        fontSize: 24,
        marginTop: 20,
        lineHeight: 1.3125,
        wordWrap: 'break-word',
    },
    rightSide: {
        paddingTop: 20,
        position: 'sticky',
        top: 0,
    },
    rightSideBlock: {
        backgroundColor: '#F5F8FA',
        borderRadius: 15,
        marginTop: 20,
        '& .MuiList-root': {
            paddingTop: 0,
        },
    },
    rightSideBlockHeader: {
        borderTop: 0,
        borderLeft: 0,
        borderRight: 0,
        backgroundColor: 'transparent',
        padding: '13px 18px',
        '& b': {
            fontSize: 20,
            fontWeight: 800,
        },
    },
    rightSideBlockItem: {
        cursor: 'pointer',
        '& .MuiTypography-body1': {
            fontWeight: 700,
        },
        '& .MuiListItemAvatar-root': {
            minWidth: 50,
        },
        '& .MuiListItemText-root': {
            margin: 0,
        },
        '&:hover': {
            backgroundColor: '#edf3f6',
        },
        '& a': {
            color: 'inherit',
            textDecoration: 'none'
        }
    },
    addForm: {
        padding: 20,
    },
    addFormBody: {
        display: 'flex',
        width: '100%',
    },
    addFormBottom: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    addFormBottomActions: {
        marginTop: 10,
        paddingLeft: 70,
    },
    addFormTextarea: {
        width: '100%',
        border: 0,
        fontSize: 20,
        outline: 'none',
        fontFamily: 'inherit',
        resize: 'none',
    },
    addFormBottomLine: {
        height: 12,
        backgroundColor: '#E6ECF0',
    },
    addFormCircleProgress: {
        position: 'relative',
        width: 20,
        height: 20,
        margin: '0 10px',
        '& .MuiCircularProgress-root': {
            position: 'absolute',
        },
    },
    addFormBottomRight: {
        display: 'flex',
        alignItems: 'center',
    },
    imagesList: {
        display: 'flex',
        alignItems: 'center',
        marginTop: 20,
        flexWrap: 'wrap'
    },
    imagesListItem: {
        width: 50,
        height: 50,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        borderRadius: 6,
        marginRight: 10,
        marginBottom: 10,
    },
    imagesListItemRemove: {
        position: 'relative',
        top: -8,
        right: -40,
        padding: '0 !important',
        backgroundColor: '#ff4d4d !important'
    }

}))
