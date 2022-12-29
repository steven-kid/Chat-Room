INSERT INTO
    userInfo
VALUES
    (1001, "steven", "online", "1234567", 1),
    (1002, "james", "online", "87654321", 0),
    (1003, "cook", "offline", "asdfg", 0),
    (1004, "mary", "suspend", "qwertyuio", 0),
    (1005, "tomas", "online", "1010101", 0);

INSERT INTO
    userDetailInfo
VALUES
    (
        1001,
        "steven",
        "44051325323",
        "yellow",
        "beijing",
        "beijing",
        CURRENT_DATE(),
        "steven@gmail.com",
        "345"
    ),
    (
        1002,
        "james",
        "3453451134",
        "black",
        "shanghai",
        "shanghai",
        CURRENT_DATE(),
        "james@gmail.com",
        "4526"
    ),
    (
        1003,
        "cook",
        "1234551134",
        "white",
        "LA",
        "US",
        CURRENT_DATE(),
        "cook@gmail.com",
        "1234"
    ),
--     (
--         1004,
--         "mary",
--         "23456",
--         "white",
--         "guangzhou",
--         "guangdong",
--         CURRENT_DATE(),
--         "mary@gmail.com",
--         null
--     ),
--     (
--         1005,
--         "tomas",
--         "440513200223",
--         "black",
--         "zhuhai",
--         "guangdong",
--         CURRENT_DATE(),
--         "tomas@gmail.com",
--         null
--     );

-- INSERT INTO
--     groupInfo
-- VALUES
--     (1, 'BNUtalk', 1001, CURRENT_DATE(), 'normal'),
--     (2, 'privateChat', 1003, CURRENT_DATE(), 'normal');

-- INSERT INTO
--     messageInfo
-- VALUES
--     (1, 1001, 1002, 'I love you', now()),
--     (2, 1002, 1001, 'I love you too', now()),
--     (3, 1001, 1002, 'Just joke', now()),
--     (4, 1002, 1001, 'stay away from me', now()),
--     (5, 1002, 1003, 'steven is stupid', now()),
--     (6, 1002, 1003, 'He joke me just now!', now()),
--     (7, 1003, 1002, "I can't agree more", now()),
--     (8, 1001, 1003, "Mary is funny", now()),
--     (9, 1001, 1005, "HI bro", now()),
--     (10, 1001, 1005, "How are you", now())


-- INSERT INTO
--     friendRelation
-- VALUES
--     (1001, 1002, CURRENT_DATE(), 'normal'),
--     (1002, 1001, CURRENT_DATE(), 'normal'),
--     (1001, 1004, CURRENT_DATE(), 'bad'),
--     (1004, 1001, CURRENT_DATE(), 'bad'),
--     (1001, 1005, CURRENT_DATE(), 'normal'),
--     (1005, 1001, CURRENT_DATE(), 'normal'),
--     (1002, 1003, CURRENT_DATE(), 'normal'),
--     (1003, 1002, CURRENT_DATE(), 'normal');

-- INSERT INTO
--     groupRelation
-- VALUES
--     (1001, 1, CURRENT_DATE()),
--     (1002, 1, CURRENT_DATE()),
--     (1003, 1, CURRENT_DATE()),
--     (1001, 2, CURRENT_DATE()),
--     (1004, 2, CURRENT_DATE()),
--     (1005, 2, CURRENT_DATE());

