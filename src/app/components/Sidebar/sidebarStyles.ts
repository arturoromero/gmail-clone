const sidebarStyles: any = {
    sidebarWrapper: {
        width: '210px',
        marginRight: '16px',
    },
    plusIcon: {
        width: '32px',
        marginRight: '6px',
    },
    composeButton :{
        boxShadow: '0 1px 2px 0 rgb(60 64 67 / 30%), 0 1px 3px 1px rgb(60 64 67 / 15%)',
        fontSize: '.875rem',
        letterSpacing: '.25px',
        alignItems: 'center',
        borderRadius: '24px',
        display: 'inline-flex',
        fontWeight: '500',
        height: '48px',
        minWidth: '56px',
        overflow: 'hidden',
        padding: '0 24px 0 12px',
        textTransform: 'none',
        '&:hover': {
            boxShadow: '0 1px 3px 0 rgb(60 64 67 / 30%), 0 4px 8px 3px rgb(60 64 67 / 15%)',
            backgroundColor: '#fafafb',
        }
    },
    composeButtonWrapper: {
        margin: '12px',
    },
    sidebarItem: {
        display: 'flex',
        alignItems: 'center',
        height: '32px',
        padding: '0 10px',
        borderTopRightRadius: '20px',
        borderBottomRightRadius: '20px',
        cursor: 'pointer',
        color: '#767676',
        '&:hover': {
            backgroundColor: '#f5f5f5',
        },
        '& svg': {
            fontSize: '20px',
        },
        '&.--active':{
            backgroundColor: '#fce8e6',
            color: '#d93025',
        }
    },
    sidebarItemText: {
        color: '#202124',
        marginLeft: '16px',
        fontSize: '.875rem',
        height: '20px',
        '&.--active':{
            color: '#d93025',
            fontWeight: '700',
        }
    },
    sidebarItemCounter: {
        color: '#202124',
        marginLeft: 'auto',
        fontSize: '.75rem',
        '&.--active':{
            color: '#d93025',
            fontWeight: '700',
        }
    }

};

export default sidebarStyles;
