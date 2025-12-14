import { gql } from '@apollo/client';

/**************************
 *         MEMBER         *
 *************************/

export const GET_MEMBERS = gql`
query GetMembers($input: MembersInquiry!) {
    getMembers(input: $input) {
        list {
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
            memberOrders
        }
        metaCounter {
            total
        }
    }
}

`;

export const GET_MEMBER = gql(`
query GetMember($input: String!) {
    getMember(input: $input) {
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
    }
}
`);

/**************************
 *        PRODUCT        *
 *************************/

export const GET_PRODUCT = gql`
	query GetProduct($input: String!) {
    getProduct(productId: $input) {
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

export const GET_PRODUCTS = gql`
	query GetProducts($input: ProductsInquiry!) {
    getProducts(input: $input) {
        list {
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
        metaCounter {
            total
        }
    }
}
`;



export const GET_FAVORITES = gql`
	query GetFavorites($input: OrdinaryInquiry!) {
    getFavorites(input: $input) {
        metaCounter {
            total
        }
        list {
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
            meLiked {
                memberId
                likeRefId
                myFavorite
            }
            productSaleCount
        }
    }
}
`;

export const GET_VISITED = gql`
	query GetVisited($input: OrdinaryInquiry!) {
    getVisited(input: $input) {
        list {
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
            meLiked {
                memberId
                likeRefId
                myFavorite
            }
            productSaleCount
        }
        metaCounter {
            total
        }
    }
}
`;


/**************************
 *      ORDER     *
 *************************/

export const GET_MY_ORDERS = gql`
	query GetMyOrders($input: OrderInqury!) {
    getMyOrders(input: $input) {
        list {
            _id
            orderTotal
            orderDelivery
            orderStatus
            memberId
            createdAt
            updatedAt
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
            }
        }
        metaCounter {
            total
        }
    }
}
`;




/**************************
 *      BOARD-ARTICLE     *
 *************************/

export const GET_BOARD_ARTICLE = gql`
	query GetBoardArticle($input: String!) {
    getBoardArticle(input: $input) {
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

export const GET_BOARD_ARTICLES = gql`
query GetBoardArticles($input: BoardArticlesInquiry!) {
    getBoardArticles(input: $input) {
        list {
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
        metaCounter {
            total
        }
    }
}
`;

/**************************
 *         COMMENT        *
 *************************/

export const GET_COMMENTS = gql`
query GetComments($input: CommentsInquiry!) {
    getComments(input: $input) {
        list {
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
        metaCounter {
            total
        }
    }
}
`;

/**************************
 *         FOLLOW        *
 *************************/
export const GET_MEMBER_FOLLOWERS = gql`
	query GetMemberFollowers($input: FollowInquiry!) {
    getMemberFollowers(input: $input) {
        list {
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
        metaCounter {
            total
        }
    }
}

`;

export const GET_MEMBER_FOLLOWINGS = gql`
	query GetMemberFollowings($input: FollowInquiry!) {
    getMemberFollowings(input: $input) {
        list {
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
            followingData {
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
        metaCounter {
            total
        }
    }
}
`;
