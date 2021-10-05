import styled from 'styled-components';

import { Link } from 'react-router-dom';

export const FlexColumn = styled.div`
    display: flex;
    flex-direction: column;
    align-items: ${props => props.align};
    justify-content: ${props => props.justify};
    width: ${props => props.width};
    margin-top: ${props => props.marginTop};
    margin-bottom: ${props => props.marginBottom};
    margin-left: ${props => props.marginLeft};
    margin-right: ${props => props.marginRight};
`

export const Box = styled.div`
    width: ${props => props.width};
    height: ${props => props.height};
    margin-top: ${props => props.marginTop};
    margin-bottom: ${props => props.marginBottom};
    margin-left: ${props => props.marginLeft};
    margin-right: ${props => props.marginRight};
`

export const FlexRow = styled.div`
    display: flex;
    flex-direction: row;
    align-items: ${props => props.align};
    justify-content: ${props => props.justify};
    width: ${props => props.width};
    margin-top: ${props => props.marginTop};
    margin-bottom: ${props => props.marginBottom};
    margin-left: ${props => props.marginLeft};
    margin-right: ${props => props.marginRight};
`

export const CustomLink = styled(Link)`
    width: 100%;
`
