import { gql } from '@apollo/client';

/**************************
 *         MEMBER         *
 *************************/

export const UPDATE_MEMBER_BY_ADMIN = gql`
mutation UptadateMemberByAdmin($input: MemberUpdate!) {
    uptadateMemberByAdmin(input: $input) {
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
}
`;

/**************************
 *        PRODUCT        *
 *************************/

export const UPDATE_PRODUCT_BY_ADMIN = gql`
mutation UpdateProduct($input: ProductUpdate!) {
    updateProduct(input: $input) {
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

export const REMOVE_PRODUCT_BY_ADMIN = gql`
	mutation RemoveProductByAdmin($input: String!) {
    removeProductByAdmin(productId: $input) {
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

/**************************
 *      ORDER     *
 *************************/

export const UPDATE_MEMBER_ORDER_BY_ADMIN = gql`
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
    }
}
`;
export const REMOVE_MEMBER_ORDER_BY_ADMIN = gql`
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
    }
}
`;


/**************************
 *      BOARD-ARTICLE     *
 *************************/

export const UPDATE_BOARD_ARTICLE_BY_ADMIN = gql`
mutation UpdateBoardArticleByAdmin($input: BoardArticleUpdate!) {
    updateBoardArticleByAdmin(input: $input) {
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

export const REMOVE_BOARD_ARTICLE_BY_ADMIN = gql`
mutation RemoveBoardArticleByAdmin($input: String!) {
    removeBoardArticleByAdmin(articleId: $input) {
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

/**************************
 *         COMMENT        *
 *************************/

export const REMOVE_COMMENT_BY_ADMIN = gql`
mutation RemoveCommentByAdmin($input: String!) {
    removeCommentByAdmin(commentId: $input) {
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
