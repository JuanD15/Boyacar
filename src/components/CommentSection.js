import { FontAwesome } from "@expo/vector-icons";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import comments from '../constants/commentTestData';
import colors from "../constants/colors";
import StarRating from "./StarRating";

export default function CommentSection() {
    return (
        <View style={styles.container}>
            {comments.map((comment) => (
                <View key={comment.id} style={styles.commentBox}>
                    <View style={styles.commentUserInfo}>
                        <FontAwesome name="user-circle-o" size={35} color={colors.PRIMARY_COLOR} />
                        <Text style={styles.userName}>{comment.userName}</Text>
                    </View>
                    <View style={styles.ratingInfo}>
                        <StarRating rating={comment.rating} />
                        <Text style={styles.ratingDate}>   {comment.commentDate}</Text>
                    </View>
                    <View style={styles.commentArea}>
                        <Text style={styles.comment} numberOfLines={3} ellipsizeMode='tail'>{comment.comment}</Text>
                    </View>
                </View>
            ))}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
    },
    commentBox: {
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderColor: '#f0f0f0',
        paddingHorizontal: 10,
        paddingVertical: 15,
        flexDirection: 'column',
        width: '98%',
    },
    commentUserInfo: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    userName: {
        fontWeight: 'bold',
        paddingLeft: 10
    },
    ratingInfo: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 8,
    },
    ratingDate: {
        fontSize: 12
    },
    comment: {
        fontSize: 13,
    },
});
