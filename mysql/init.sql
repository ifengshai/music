CREATE DATABASE go_zero;

USE go_zero;

DROP TABLE IF EXISTS `music`;
CREATE TABLE `music` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT COMMENT '主键',
  `user_id` int(10) unsigned NOT NULL DEFAULT '0' COMMENT '用户表id',
  `music_image` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '' COMMENT '音乐图片',
  `music_artist` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '' COMMENT '音乐的演唱者',
  `music_name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '' COMMENT '音乐名称',
  `music_file` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '' COMMENT '音乐播放源地址',
  `music_lyric` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci COMMENT '音乐歌词地址',
  `is_love` tinyint(1) unsigned NOT NULL DEFAULT '0' COMMENT '是否是喜欢的音乐，0：不是，1：是，',
  `extend` text COLLATE utf8mb4_unicode_ci COMMENT '扩展字段',
  `create_timestamp` int(10) unsigned NOT NULL DEFAULT '0' COMMENT '创建时间',
  `update_timestamp` int(10) unsigned NOT NULL DEFAULT '0' COMMENT '更新时间',
  `delete_timestamp` int(10) unsigned NOT NULL DEFAULT '0' COMMENT '删除时间',
  PRIMARY KEY (`id`) USING BTREE,
  KEY `idx_token` (`user_id`) USING BTREE,
  KEY `idx_token_love` (`user_id`,`is_love`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci ROW_FORMAT=DYNAMIC COMMENT='音乐记录';

DROP TABLE IF EXISTS `users`;
CREATE TABLE `users`  (
  `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT COMMENT '主键',
  `nickname` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '' COMMENT '昵称',
  `email` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '' COMMENT 'email(登录账号)',
  `password` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '' COMMENT '密码',
  `create_timestamp` int(10) UNSIGNED NOT NULL DEFAULT 0 COMMENT '创建时间戳',
  `update_timestamp` int(10) UNSIGNED NOT NULL DEFAULT 0 COMMENT '最后更新时间戳',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 2 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_unicode_ci COMMENT = '用户表' ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of users
-- ----------------------------
INSERT INTO `users` VALUES (1, 'fengsha', 'ifengshai@foxmail.com', '$2a$10$fjjrqiC3yh38E51QkuGoOO4yJnrETKN71oENjtKHBD5SMMiPbk99a', 1698304052, 1698304052);
