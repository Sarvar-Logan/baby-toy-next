import { gql } from '@apollo/client';

/**************************
 *         MEMBER         *
 *************************/

export const GET_ALL_MEMBERS_BY_ADMIN = gql`
query GetMember($input: MembersInquiry!) {
    getAllMemmbersByAdmin(input: $input) {
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
            accessToken
            memberOrders
        }
        metaCounter {
            total
        }
    }
}
`;

/**************************
 *        PRODUCT        *
 *************************/

export const GET_ALL_PRODUCTS_BY_ADMIN = gql`
query GetAllProductsByAdmin($input: AllProductsInquiry!) {
    getAllProductsByAdmin(input: $input) {
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

/**************************
 *      ORDERS     *
 *************************/

export const GET_ALL_ORDERS_BY_ADMIN = gql`
query GetMemberOrdersByAdmin($input: OrderAdminInqury!) {
    getMemberOrdersByAdmin(input: $input) {
        list {
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
        metaCounter {
            total
        }
    }
}
`;


/**************************
 *      BOARD-ARTICLE     *
 *************************/

export const GET_ALL_BOARD_ARTICLES_BY_ADMIN = gql`
	query GetAllBoardArticlesByAdmin($input: AllBoardArticlesInquiry!) {
    getAllBoardArticlesByAdmin(input: $input) {
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
					memberAddress
					memberDesc
					memberWarnings
					memberBlocks
					memberProperties
					memberRank
					memberPoints
					memberLikes
					memberViews
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
