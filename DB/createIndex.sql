-- B+ 索引
create index id_name on userInfo(userId);
create index id_name on userDetailInfo(userId);

-- Hash 索引
create index hash_id using hash on groupRelation(groupID);
create index hash_id using hash on friendRelation(userID, friendID);