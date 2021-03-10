const sidebarStyles: any = {
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
    }
    
};

export default sidebarStyles;
