DROP Table userInfo, userDetailInfo, messageInfo,
groupInfo, friendRelation, groupRelation;

CREATE Table `userinfo`(
    `userID` INT PRIMARY KEY,
    `userName` VARCHAR(20) default "user",
    `loginState` VARCHAR(10) default "offline",
    `password` VARCHAR(10) NOT NULL,
    `isAdmin` INT NOT NULL
);

CREATE Table `userDetailInfo`(
    `userID` INT PRIMARY KEY NOT NULL,
    `Name` VARCHAR(20) NOT NULL,
    `IDcardNumber` VARCHAR(20) NOT NULL,
    `Race` VARCHAR(20),
    `City` VARCHAR(10),
    `Province` VARCHAR(10),
    `CreateTime` DATE,
    `Email` VARCHAR(20),
    `Contact` VARCHAR(20),
    foreign key(userID) references userinfo(userID)
);

CREATE Table `messageInfo`(
    `messageID` INT Primary Key,
    `senderID` INT,
    `receiverID` INT,
    `messageInfo` VARCHAR(100),
    `sendTime` DATETIME,
    foreign key(senderID) references userInfo(userID),
    foreign key(ReceiverID) references userInfo(userID)
);

CREATE Table `groupInfo`(
    `groupID` INT PRIMARY KEY,
    `groupName` VARCHAR(20) NOT NULL,
    `groupOwner` INT,
    `createTime` DATE,
    `groupState` VARCHAR(10),
    foreign key(GroupOwner) references userInfo(userID)
);

CREATE table `friendRelation`(
    `userId` INT,
    `friendID` INT,
    `addTime` DATE,
    `friendState` VARCHAR(10),
    foreign key(userID) references userInfo(userID),
    foreign key(friendID) references userInfo(userID),
    PRIMARY KEY(userID, FriendID)
);

CREATE table `groupRelation`(
    `userId` INT,
    `groupID` INT,
    `addTime` DATE,
    foreign key(userID) references userInfo(userID),
    foreign key(groupID) references groupInfo(groupID),
    PRIMARY KEY(userID, groupID)
);