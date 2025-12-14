import { gql } from '@apollo/client';

/**************************
 *         MEMBER         *
 *************************/

export const SIGN_UP = gql`
	mutation Singup($input: MemberInput!) {
    singup(input: $input) {
        _id
        memberType
        memberStatus
        memberAuthType
        memberPhone
        memberNick
        memberFullName
        memberImage
        memberAdress
        memberDesc
        memberArticles
        memberFollowers
        memberFollowings
        memberPoints
        memberLikes
        memberViews
        memberComments
        memberRank
        memberWarnings
        memberBlocks
        deletedAt
        createdAt
        updatedAt
        accessToken
        memberOrders
    }
}`;

export const LOGIN = gql`
mutation Login($input: LoginInput!) {
    login(input: $input) {
        _id
        memberType
        memberStatus
        memberAuthType
        memberPhone
        memberNick
        memberFullName
        memberImage
        memberAdress
        memberDesc
        memberArticles
        memberFollowers
        memberFollowings
        memberPoints
        memberLikes
        memberViews
        memberComments
        memberRank
        memberWarnings
        memberBlocks
        deletedAt
        createdAt
        updatedAt
        accessToken
        memberOrders
    }
}`;

export const UPDATE_MEMBER = gql`
mutation UpdateMember($input: MemberUpdate!) {
    updateMember(input: $input) {
        _id
        memberType
        memberStatus
        memberAuthType
        memberPhone
        memberNick
        memberFullName
        memberImage
        memberAdress
        memberDesc
        memberArticles
        memberFollowers
        memberFollowings
        memberPoints
        memberLikes
        memberViews
        memberComments
        memberRank
        memberWarnings
        memberBlocks
        deletedAt
        createdAt
        updatedAt
        accessToken
    }
}
`;

export const LIKE_TARGET_MEMBER = gql`
mutation LikeTargetMember($input: String!) {
    likeTargetMember(memberId: $input) {
        _id
        memberType
        memberStatus
        memberAuthType
        memberPhone
        memberNick
        memberFullName
        memberImage
        memberAdress
        memberDesc
        memberArticles
        memberFollowers
        memberFollowings
        memberPoints
        memberLikes
        memberViews
        memberComments
        memberRank
        memberOrders
        memberWarnings
        memberBlocks
        deletedAt
        createdAt
        updatedAt
        accessToken
    }
}
`;

/**************************
 *        PRODUCT        *
 *************************/

export const CREATE_PRODUCT = gql`
mutation CreateProduct($input: ProductInput!) {
    createProduct(input: $input) {
        _id
        productType
        productStatus
        productName
        productPrice
        productViews
        productLikes
        productComments
        productRank
        productImages
        productDesc
        deletedAt
        createdAt
        updatedAt
        productSaleCount
    }
}
`;


export const LIKE_TARGET_PRODUCT = gql`
	mutation LikeTargetProduct($input: String!) {
    likeTargetProduct(productId: $input) {
        _id
        productType
        productStatus
        productName
        productPrice
        productViews
        productLikes
        productComments
        productRank
        productImages
        productDesc
        deletedAt
        createdAt
        updatedAt
        productSaleCount
        memberData {
            _id
            memberType
            memberStatus
            memberAuthType
            memberPhone
            memberNick
            memberFullName
            memberImage
            memberAdress
            memberDesc
            memberArticles
            memberFollowers
            memberFollowings
            memberPoints
            memberLikes
            memberViews
            memberComments
            memberRank
            memberOrders
            memberWarnings
            memberBlocks
            deletedAt
            createdAt
            updatedAt
            accessToken
        }
    }
}
`;



/**************************
 *      ORDER     *
 *************************/

export const CREATE_ORDER = gql`
	mutation CreateOrder($input: OrderInput!) {
    createOrder(input: $input) {
        _id
        orderTotal
        orderDelivery
        orderStatus
        memberId
        createdAt
        updatedAt
    }
}
`;





export const UPDATE_ORDER = gql`
mutation UpdateMyOrder($input: OrderUpdateInput!) {
    updateMyOrder(input: $input) {
        _id
        orderTotal
        orderDelivery
        orderStatus
        memberId
        createdAt
        updatedAt
        productData {
            _id
            productType
            productStatus
            productName
            productPrice
            productViews
            productLikes
            productComments
            productRank
            productImages
            productDesc
            deletedAt
            createdAt
            updatedAt
            productSaleCount
            memberData {
                _id
                memberType
                memberStatus
                memberAuthType
                memberPhone
                memberNick
                memberFullName
                memberImage
                memberAdress
                memberDesc
                memberArticles
                memberFollowers
                memberFollowings
                memberPoints
                memberLikes
                memberViews
                memberComments
                memberRank
                memberOrders
                memberWarnings
                memberBlocks
                deletedAt
                createdAt
                updatedAt
                accessToken
            }
        }
        orderItems {
            _id
            itemQuantity
            itemPrice
            productId
            orderId
            createdAt
            updatedAt
        }
        memberData {
            _id
            memberType
            memberStatus
            memberAuthType
            memberPhone
            memberNick
            memberFullName
            memberImage
            memberAdress
            memberDesc
            memberArticles
            memberFollowers
            memberFollowings
            memberPoints
            memberLikes
            memberViews
            memberComments
            memberRank
            memberOrders
            memberWarnings
            memberBlocks
            deletedAt
            createdAt
            updatedAt
            accessToken
        }
    }
}
`;


/**************************
 *      BOARD-ARTICLE     *
 *************************/

export const CREATE_BOARD_ARTICLE = gql`
	mutation CreateBoardArticle($input: BoardArticleInput!) {
    createBoardArticle(input: $input) {
        _id
        articleCategory
        articleStatus
        articleTitle
        articleContent
        articleImage
        articleViews
        articleLikes
        articleComments
        memberId
        createdAt
        updatedAt
        memberData {
            _id
            memberType
            memberStatus
            memberAuthType
            memberPhone
            memberNick
            memberFullName
            memberImage
            memberAdress
            memberDesc
            memberArticles
            memberFollowers
            memberFollowings
            memberPoints
            memberLikes
            memberViews
            memberComments
            memberRank
            memberOrders
            memberWarnings
            memberBlocks
            deletedAt
            createdAt
            updatedAt
            accessToken
        }
    }
}
`;

export const UPDATE_BOARD_ARTICLE = gql`
mutation UpdateBoardArticle($input: BoardArticleUpdate!) {
    updateBoardArticle(input: $input) {
        _id
        articleCategory
        articleStatus
        articleTitle
        articleContent
        articleImage
        articleViews
        articleLikes
        articleComments
        memberId
        createdAt
        updatedAt
        memberData {
            _id
            memberType
            memberStatus
            memberAuthType
            memberPhone
            memberNick
            memberFullName
            memberImage
            memberAdress
            memberDesc
            memberArticles
            memberFollowers
            memberFollowings
            memberPoints
            memberLikes
            memberViews
            memberComments
            memberRank
            memberOrders
            memberWarnings
            memberBlocks
            deletedAt
            createdAt
            updatedAt
            accessToken
        }
    }
}

`;

export const LIKE_TARGET_BOARD_ARTICLE = gql`
mutation LikeTargetBoardArticle($input: String!) {
    likeTargetBoardArticle(articleId: $input) {
        _id
        articleCategory
        articleStatus
        articleTitle
        articleContent
        articleImage
        articleViews
        articleLikes
        articleComments
        memberId
        createdAt
        updatedAt
    }
}
`;

/**************************
 *         COMMENT        *
 *************************/

export const CREATE_COMMENT = gql`
mutation CreateComment($input: CommentInput!) {
    createComment(input: $input) {
        _id
        commentStatus
        commentGroup
        commentContent
        commentRefId
        memberId
        createdAt
        updatedAt
        memberData {
            _id
            memberType
            memberStatus
            memberAuthType
            memberPhone
            memberNick
            memberFullName
            memberImage
            memberAdress
            memberDesc
            memberArticles
            memberFollowers
            memberFollowings
            memberPoints
            memberLikes
            memberViews
            memberComments
            memberRank
            memberOrders
            memberWarnings
            memberBlocks
            deletedAt
            createdAt
            updatedAt
            accessToken
        }
    }
}

`;

export const UPDATE_COMMENT = gql`
mutation UpdateComment($input: CommentUpdate!) {
    updateComment(input: $input) {
        _id
        commentStatus
        commentGroup
        commentContent
        commentRefId
        memberId
        createdAt
        updatedAt
        memberData {
            _id
            memberType
            memberStatus
            memberAuthType
            memberPhone
            memberNick
            memberFullName
            memberImage
            memberAdress
            memberDesc
            memberArticles
            memberFollowers
            memberFollowings
            memberPoints
            memberLikes
            memberViews
            memberComments
            memberRank
            memberOrders
            memberWarnings
            memberBlocks
            deletedAt
            createdAt
            updatedAt
            accessToken
        }
    }
}
`;

/**************************
 *         FOLLOW        *
 *************************/

export const SUBSCRIBE = gql`
mutation Subscribe($input: String!) {
    subscribe(input: $input) {
        _id
        followingId
        followerId
        createdAt
        updatedAt
        meLiked {
            memberId
            likeRefId
            myFavorite
        }
        meFollowed {
            followingId
            followerId
            myFollowing
        }
        followerData {
            _id
            memberType
            memberStatus
            memberAuthType
            memberPhone
            memberNick
            memberFullName
            memberImage
            memberAdress
            memberDesc
            memberArticles
            memberFollowers
            memberFollowings
            memberPoints
            memberLikes
            memberViews
            memberComments
            memberRank
            memberOrders
            memberWarnings
            memberBlocks
            deletedAt
            createdAt
            updatedAt
            accessToken
        }
    }
}

`;

export const UNSUBSCRIBE = gql`
mutation Unsubscribe($input: String!) {
    unsubscribe(input: $input) {
        _id
        followingId
        followerId
        createdAt
        updatedAt
        meLiked {
            memberId
            likeRefId
            myFavorite
        }
        meFollowed {
            followingId
            followerId
            myFollowing
        }
        followerData {
            _id
            memberType
            memberStatus
            memberAuthType
            memberPhone
            memberNick
            memberFullName
            memberImage
            memberAdress
            memberDesc
            memberArticles
            memberFollowers
            memberFollowings
            memberPoints
            memberLikes
            memberViews
            memberComments
            memberRank
            memberOrders
            memberWarnings
            memberBlocks
            deletedAt
            createdAt
            updatedAt
            accessToken
        }
    }
}
`;
