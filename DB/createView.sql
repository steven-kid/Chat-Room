CREATE view sendStas AS (
    SELECT
        userDetailInfo.Name Name,
        count(senderID) messageCount,
        max(sendTime) lastMessageTime
    FROM
        messageInfo,
        userDetailInfo
    WHERE
        messageInfo.senderID = userDetailInfo.userID
    GROUP BY
        messageInfo.senderID
);

CREATE view groupMemberCount AS (
    SELECT
        groupInfo.groupName Name,
        count(groupRelation.groupID) MemberCount
    FROM
        groupInfo,
        groupRelation
    WHERE
        groupInfo.groupID = groupRelation.groupID
        AND groupInfo.groupState != "suspend"
    GROUP BY
        groupRelation.groupID
);

CREATE view friendsCount AS (
    SELECT
        userInfo.userName Name,
        FriendsCount
    FROM
        userInfo
        LEFT JOIN (
            select
                userInfo.userName Name,
                count(friendRelation.userID) FriendsCount,
                userInfo.userID tempID
            FROM
                userInfo,
                friendRelation
            WHERE
                userInfo.userID = friendRelation.userID
                AND friendRelation.friendState != 'bad'
            GROUP BY
                userInfo.userID
        ) AS TempTabel ON userInfo.userID = TempTabel.tempID
);

select
    *
from
    groupMemberCount;