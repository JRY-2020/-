/*
 Navicat Premium Data Transfer

 Source Server         : demo
 Source Server Type    : MySQL
 Source Server Version : 80013
 Source Host           : localhost:3306
 Source Schema         : blog

 Target Server Type    : MySQL
 Target Server Version : 80013
 File Encoding         : 65001

 Date: 31/03/2021 15:29:39
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for admin
-- ----------------------------
DROP TABLE IF EXISTS `admin`;
CREATE TABLE `admin`  (
  `ad_id` int(11) NOT NULL,
  `username` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `password` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `a_name` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `role` int(11) NULL DEFAULT NULL,
  `last_login_at` datetime(0) NULL DEFAULT NULL,
  `ad_create` datetime(0) NULL DEFAULT NULL,
  `ad_update` datetime(0) NULL DEFAULT NULL,
  PRIMARY KEY (`ad_id`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of admin
-- ----------------------------
INSERT INTO `admin` VALUES (1, '蒋若依', '123456', '蒋若依', 0, '2021-02-08 12:53:13', '2021-02-01 12:53:18', '2021-02-15 12:53:45');
INSERT INTO `admin` VALUES (2, '张三', '123456', '张三', 0, '2021-02-10 12:54:07', '2021-02-01 12:54:12', '2021-02-14 12:54:16');
INSERT INTO `admin` VALUES (3, '王五', '123456', '王五', 0, '2021-02-08 12:53:13', '2021-02-08 12:53:13', '2021-02-08 12:53:13');
INSERT INTO `admin` VALUES (4, 'admin', '123456', 'admin', 0, '2021-03-01 17:23:49', '2021-01-06 17:23:53', '2021-03-09 17:23:58');
INSERT INTO `admin` VALUES (5, '马强', '123456', '马强', 0, NULL, NULL, NULL);
INSERT INTO `admin` VALUES (8, 'assa', '123456', NULL, 1, NULL, NULL, NULL);

-- ----------------------------
-- Table structure for article
-- ----------------------------
DROP TABLE IF EXISTS `article`;
CREATE TABLE `article`  (
  `a_id` int(11) NOT NULL,
  `a_cate` int(11) NOT NULL,
  `title` varchar(500) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `a_desc` varchar(1000) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `content` text CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL,
  `acreated_at` datetime(0) NULL DEFAULT NULL,
  `aupdated_at` datetime(0) NULL DEFAULT NULL,
  PRIMARY KEY (`a_id`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of article
-- ----------------------------
INSERT INTO `article` VALUES (1, 11, 'C++语法', '教你看懂C++基础语法', 'C++ 程序可以定义为对象的集合', '2021-02-09 13:39:28', '2021-02-15 13:39:33');
INSERT INTO `article` VALUES (2, 22, 'Java语法', '基础Java语法', '111', '2021-02-16 09:28:48', '2021-02-21 09:28:53');
INSERT INTO `article` VALUES (444, 444, 'sads', 'asdss', '<p>dsad</p>', NULL, NULL);
INSERT INTO `article` VALUES (700, 700, 'hjsdhhds', 'sjhjsaj', '<p>hsdhjsdah</p>', NULL, NULL);

-- ----------------------------
-- Table structure for cate
-- ----------------------------
DROP TABLE IF EXISTS `cate`;
CREATE TABLE `cate`  (
  `c_id` int(11) NOT NULL,
  `c_name` varchar(44) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `created_at` datetime(0) NULL DEFAULT NULL,
  `updated_at` datetime(0) NULL DEFAULT NULL,
  PRIMARY KEY (`c_id`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of cate
-- ----------------------------
INSERT INTO `cate` VALUES (11, 'C++', '2021-02-09 22:44:15', '2021-02-09 22:44:18');
INSERT INTO `cate` VALUES (22, 'JavaScript', '2021-02-09 22:44:15', '2021-02-10 22:44:15');
INSERT INTO `cate` VALUES (33, 'PHP', '2021-02-09 22:44:15', '2021-02-10 22:44:15');
INSERT INTO `cate` VALUES (44, 'C语言', '2021-03-02 13:26:54', '2021-02-24 13:26:57');
INSERT INTO `cate` VALUES (66, 'go', '2021-02-01 13:28:05', '2021-03-01 13:28:09');
INSERT INTO `cate` VALUES (77, 'python', '2021-03-22 00:00:00', '2021-03-25 00:00:00');

-- ----------------------------
-- Table structure for info
-- ----------------------------
DROP TABLE IF EXISTS `info`;
CREATE TABLE `info`  (
  `i_id` int(11) NOT NULL,
  `i_title` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `subtitle` varchar(40) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `about` text CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL,
  `i_create` datetime(0) NULL DEFAULT NULL,
  `i_update` datetime(0) NULL DEFAULT NULL,
  PRIMARY KEY (`i_id`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of info
-- ----------------------------
INSERT INTO `info` VALUES (1, 'C++', '一个月学会C++', '中新社建有多渠道、多层次、多功能的新闻信息发布体系，每天24小时不间断向世界各地播发文字、图片、视频、版面、图表、网络、新媒体等各类新闻信息产品，用户遍及五大洲一百多个国家和地区，形成了涵盖海外主要华文媒体的全媒体客户网络。', '2021-02-08 13:27:34', '2021-02-15 13:27:37');
INSERT INTO `info` VALUES (2, 'Java', '两个月学会Java语法', '啦啦啦啦啦啦', NULL, NULL);

SET FOREIGN_KEY_CHECKS = 1;
