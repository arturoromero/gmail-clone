const sidebarStyles: any = {
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
    }

};

export default sidebarStyles;
