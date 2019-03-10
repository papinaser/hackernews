import React from "react";
import {format} from "timeago.js";
import getSiteHostName from "../../utils/getSiteHostname";
import getActionLink,{HN_ITEM,HN_USER} from "../../utils/getArticleLink";
import {Item,Title,Host,ExternalLink,Description,CommentLink} from "./styles";

//const timeago=Timeago();
const LINK_URL="nofollow noreferrer noopener";
const ListItem=({by,kids=[],score,url,title,id,type,time})=>{
    const site=getSiteHostName(url) || "news.ycombine.com";
    const link=getActionLink({url,id});
    const commentUrl=`${HN_ITEM}${id}`;
    const userUrl=`${HN_USER}${by}`;

    return(
        <Item>
            <ExternalLink href={link} rel={LINK_URL} target="_blank">
                <Title>
                    {title} <Host>{site}</Host>
                </Title>
            </ExternalLink>
            <Description>
                {score} points by{' '}
                <CommentLink href={userUrl} rel={LINK_URL} target="_blank">
                    {by}
                </CommentLink>{' '}
                {format(new Date(time*1000).toString())} {' | '}
                <CommentLink href={commentUrl} rel={LINK_URL} target="_blank">
                    {kids.length} Comments
                </CommentLink>
            </Description>
        </Item>
    )
};

export default ListItem;