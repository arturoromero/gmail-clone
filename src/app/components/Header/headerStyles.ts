const headerStyles: any = {
    container: {
        minWidth: '1130px',
        padding: '8px',
        boxShadow: 'inset 0 -1px 0 rgb(100 121 143 / 12%)',
         color: '#5f6368',
    },
    header_right: {
        justifyContent: 'flex-end',
        display: 'flex',
    },
    logo: {
        width:'114px',
        height: '26px',
        position: 'absolute',
        top: '18px',
        marginLeft: '8px',
    },
    inputbar: {
        backgroundColor: '#f1f3f4',
        boxShadow: 'none',
        display: 'flex',
        marginRight: '10px',
    },
    dropDownIcon: {
        marginLeft: 'auto',
    },
    logoAlt: {
        maxHeight: '32px',
        width: '78px',
        marginTop: '11px',
    },
    userMenuContainer: {
        border: '1px solid #dadce0',
        boxSizing: 'border-box',
        cursor: 'pointer',
        display: 'inline-block',
        maxHeight: '48px',
        padding: '0',
        verticalAlign: 'middle',
        width: '134px',
        borderRadius:'8px',
        boxShadow: 'none',
    },
    avatarWrapper: {
        display: 'inline-block',
        paddingLeft: '7px',
        paddingBottom: '2px',
        textAlign: 'center',
        verticalAlign: 'middle',
        lineHeight: '32px',
        width: '78px',
    },
    randomAvatar: {
        display: 'inline-block',
        maxWidth: '34px',
        position: 'absolute',
        margin: '6px',
        borderRadius: '17px',
    }
};

export default headerStyles;
