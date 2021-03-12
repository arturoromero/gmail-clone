const mailViewStyles: any = {
    mailViewWrapper: {
        display: 'flex',
        width:'100%',
    },
    mailListWrapper: {
        display: 'flex',
        width:'100%',
    },
    mailListHeader: {
        display: 'flex',
        position: 'sticky',
        top: '0',
        backgroundColor: '#fff',
        width: '100%',
        height: '48px',
        boxShadow: '0 3px 2px -2px rgb(0 0 0 / 10%)',
        justifyContent: 'space-between',
        zIndex: '9999',
    },
    mailListHeaderLeft: {
        display: 'flex',
        alignItems: 'center',
    },
    mailListHeaderRight: {
        fontSize: '.75rem',
        color: '#5f6368',
        display: 'flex',
        paddingRight: '8px',
    },
    paginationText: {
        padding: '6px 8px',
        fontSize: '.75rem',
        fontWeight: '400',
        color: '#616569',
        textTransform: 'none',
        display: 'flex',
        margin: '7px 0',
        borderRadius: '8px',
        '&:hover':{
            backgroundColor: '#e5e5e5'
        }
    },
    paginationIconsWrapper: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    mailListContent: {
        overflowY: 'auto',
        height: '100vh',
    },
    iconGroup:{
        display: 'flex',
        margin: '0 7px',
        boxShadow: 'inset -1px 0 0 rgb(100 121 143 / 12%)',
        height: '24px',
        alignItems: 'center',
        '& button': {
            height: '46px',
        },
        '&:last-child': {
            boxShadow: 'none',
        }
    },
    mailBody: {
        padding: '26px',
        color: '#555',
        font: 'small/ 1.5  Arial,Helvetica,sans-serif ',
    },
    mailBodySubject: {
        fontSize: '1.375rem',
        color: '#202124'
    },
    randomAvatar: {
        width: '40px',
        height: '40px',
        marginTop: '12px',
        borderRadius: '20px',
    },
    mailSender: {
        display: 'flex',
        alignItems: 'center',
    },
    mailSenderText: {
        fontWeight: '600',
        color: '#202124',
        margin: '8px 0 0 8px',
    }


    
};

export default mailViewStyles;
