const mailRowStyles: any = {
    mailRowWrapper: {
        display: 'flex',
        fontSize:  '.875rem',
        backgroundColor: 'rgba(242,245,245,0.8)',
        width:'100%',
        alignItems: 'center',
        height: '40px',
        borderBottom: '1px solid whitesmoke',
        cursor: 'pointer',
        zIndex: '9999',
        '& svg':{
            color: '#d7d7d7',
        },
        '&:hover': {
            boxShadow: 'inset 1px 0 0 #dadce0, inset -1px 0 0 #dadce0, 0 1px 2px 0 rgb(60 64 67 / 30%), 0 1px 3px 1px rgb(60 64 67 / 15%)',
            '& svg': {
                color: '#767676',
            },
        },
    },
    yelloStar: {
        color: '#f4c84b',
    },
    rowOptions: {
        display: 'flex',
    },
    rowSender: {
        display: 'flex',
        paddingRight: '32px',
    },
    rowSubject: {
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        padding: '0 6px',
        flex: '0.8',
        alignItems: 'center',
    },
    rowBody: {
        color: '#5f6368',
    },
    rowDate: {
        display: 'flex',
        fontSize: '.75rem',
        fontWeight: '500',
        color: '#5f6368',
        marginLeft: 'auto',
        paddingRight: '16px',
    }
    
};

export default mailRowStyles;
