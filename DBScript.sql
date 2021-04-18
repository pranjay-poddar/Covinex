USE [QuizDB]
GO
/****** Object:  Table [dbo].[Question]    Script Date: 3/1/2018 7:06:27 PM ******/
IF  EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[Question]') AND type in (N'U'))
DROP TABLE [dbo].[Question]
GO
/****** Object:  Table [dbo].[Participant]    Script Date: 3/1/2018 7:06:27 PM ******/
IF  EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[Participant]') AND type in (N'U'))
DROP TABLE [dbo].[Participant]
GO
USE [master]
GO
/****** Object:  Database [QuizDB]    Script Date: 3/1/2018 7:06:27 PM ******/
IF  EXISTS (SELECT name FROM sys.databases WHERE name = N'QuizDB')
DROP DATABASE [QuizDB]
GO
/****** Object:  Database [QuizDB]    Script Date: 3/1/2018 7:06:27 PM ******/
IF NOT EXISTS (SELECT name FROM sys.databases WHERE name = N'QuizDB')
BEGIN
CREATE DATABASE [QuizDB]
 CONTAINMENT = NONE
 ON  PRIMARY 
( NAME = N'QuizDB', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL15.SQLEXPRESS\MSSQL\DATA\QuizDB.mdf' , SIZE = 3072KB , MAXSIZE = UNLIMITED, FILEGROWTH = 1024KB )
 LOG ON 
( NAME = N'QuizDB_log', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL15.SQLEXPRESS\MSSQL\DATA\QuizDB_log.ldf' , SIZE = 1024KB , MAXSIZE = 2048GB , FILEGROWTH = 10%)
END

GO
ALTER DATABASE [QuizDB] SET COMPATIBILITY_LEVEL = 110
GO
IF (1 = FULLTEXTSERVICEPROPERTY('IsFullTextInstalled'))
begin
EXEC [QuizDB].[dbo].[sp_fulltext_database] @action = 'enable'
end
GO
ALTER DATABASE [QuizDB] SET ANSI_NULL_DEFAULT OFF 
GO
ALTER DATABASE [QuizDB] SET ANSI_NULLS OFF 
GO
ALTER DATABASE [QuizDB] SET ANSI_PADDING OFF 
GO
ALTER DATABASE [QuizDB] SET ANSI_WARNINGS OFF 
GO
ALTER DATABASE [QuizDB] SET ARITHABORT OFF 
GO
ALTER DATABASE [QuizDB] SET AUTO_CLOSE OFF 
GO
ALTER DATABASE [QuizDB] SET AUTO_CREATE_STATISTICS ON 
GO
ALTER DATABASE [QuizDB] SET AUTO_SHRINK OFF 
GO
ALTER DATABASE [QuizDB] SET AUTO_UPDATE_STATISTICS ON 
GO
ALTER DATABASE [QuizDB] SET CURSOR_CLOSE_ON_COMMIT OFF 
GO
ALTER DATABASE [QuizDB] SET CURSOR_DEFAULT  GLOBAL 
GO
ALTER DATABASE [QuizDB] SET CONCAT_NULL_YIELDS_NULL OFF 
GO
ALTER DATABASE [QuizDB] SET NUMERIC_ROUNDABORT OFF 
GO
ALTER DATABASE [QuizDB] SET QUOTED_IDENTIFIER OFF 
GO
ALTER DATABASE [QuizDB] SET RECURSIVE_TRIGGERS OFF 
GO
ALTER DATABASE [QuizDB] SET  DISABLE_BROKER 
GO
ALTER DATABASE [QuizDB] SET AUTO_UPDATE_STATISTICS_ASYNC OFF 
GO
ALTER DATABASE [QuizDB] SET DATE_CORRELATION_OPTIMIZATION OFF 
GO
ALTER DATABASE [QuizDB] SET TRUSTWORTHY OFF 
GO
ALTER DATABASE [QuizDB] SET ALLOW_SNAPSHOT_ISOLATION OFF 
GO
ALTER DATABASE [QuizDB] SET PARAMETERIZATION SIMPLE 
GO
ALTER DATABASE [QuizDB] SET READ_COMMITTED_SNAPSHOT OFF 
GO
ALTER DATABASE [QuizDB] SET HONOR_BROKER_PRIORITY OFF 
GO
ALTER DATABASE [QuizDB] SET RECOVERY SIMPLE 
GO
ALTER DATABASE [QuizDB] SET  MULTI_USER 
GO
ALTER DATABASE [QuizDB] SET PAGE_VERIFY CHECKSUM  
GO
ALTER DATABASE [QuizDB] SET DB_CHAINING OFF 
GO
ALTER DATABASE [QuizDB] SET FILESTREAM( NON_TRANSACTED_ACCESS = OFF ) 
GO
ALTER DATABASE [QuizDB] SET TARGET_RECOVERY_TIME = 0 SECONDS 
GO
USE [QuizDB]
GO
/****** Object:  Table [dbo].[Participant]    Script Date: 3/1/2018 7:06:27 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
SET ANSI_PADDING ON
GO
IF NOT EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[Participant]') AND type in (N'U'))
BEGIN
CREATE TABLE [dbo].[Participant](
	[ParticipantID] [int] IDENTITY(1,1) NOT NULL,
	[Name] [varchar](50) NULL,
	[Email] [varchar](50) NULL,
	[Score] [int] NULL,
	[TimeSpent] [int] NULL,
 CONSTRAINT [PK_Partcipant] PRIMARY KEY CLUSTERED 
(
	[ParticipantID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
END
GO
SET ANSI_PADDING OFF
GO
/****** Object:  Table [dbo].[Question]    Script Date: 3/1/2018 7:06:27 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
SET ANSI_PADDING ON
GO
IF NOT EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[Question]') AND type in (N'U'))
BEGIN
CREATE TABLE [dbo].[Question](
	[QnID] [int] IDENTITY(1,1) NOT NULL,
	[Qn] [varchar](250) NULL,
	[ImageName] [varchar](50) NULL,
	[Option1] [varchar](50) NULL,
	[Option2] [varchar](50) NULL,
	[Option3] [varchar](50) NULL,
	[Option4] [varchar](50) NULL,
	[Answer] [int] NULL,
 CONSTRAINT [PK_Question] PRIMARY KEY CLUSTERED 
(
	[QnID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
END
GO
SET ANSI_PADDING OFF
GO
USE [master]
GO
ALTER DATABASE [QuizDB] SET  READ_WRITE 
GO

USE [QuizDB]
GO
SET IDENTITY_INSERT [dbo].[Question] ON 

GO
INSERT [dbo].[Question] ([QnID], [Qn], [ImageName], [Option1], [Option2], [Option3], [Option4], [Answer]) VALUES (1, N'What does HTML stand for?', NULL, N'Hyper Trainer Marking Language', N'Hyper Text Marketing Language', N'Hyper Text Markup Language', N'Hyper Text Markup Leveler', 2)
GO
INSERT [dbo].[Question] ([QnID], [Qn], [ImageName], [Option1], [Option2], [Option3], [Option4], [Answer]) VALUES (2, N'In Java, a method is a container that holds classes.', NULL, N'True', N'False', NULL, NULL, 1)
GO
INSERT [dbo].[Question] ([QnID], [Qn], [ImageName], [Option1], [Option2], [Option3], [Option4], [Answer]) VALUES (3, N'Who invented the first computer ?', NULL, N'Charles Babbage', N'Linus Torvalds', N'Dennis Ritchie', N'James Gosling', 0)
GO
INSERT [dbo].[Question] ([QnID], [Qn], [ImageName], [Option1], [Option2], [Option3], [Option4], [Answer]) VALUES (4, N'Which of the following languages is more suited to a structured program?', NULL, N'FORTRAN', N'BASIC', N'PASCAL', N'PL/1', 2)
GO
INSERT [dbo].[Question] ([QnID], [Qn], [ImageName], [Option1], [Option2], [Option3], [Option4], [Answer]) VALUES (5, N'The brain of any computer system is', NULL, N'ALU', N'Memory', N'CPU', N'Control unit', 2)
GO
INSERT [dbo].[Question] ([QnID], [Qn], [ImageName], [Option1], [Option2], [Option3], [Option4], [Answer]) VALUES (6, N'Which of the following computer language is used for artificial intelligence?', NULL, N'FORTRAN', N'PROLOG', N'C', N'COBOL', 1)
GO
INSERT [dbo].[Question] ([QnID], [Qn], [ImageName], [Option1], [Option2], [Option3], [Option4], [Answer]) VALUES (7, N'Which of the following is the 1''s complement of 10?', NULL, N'01', N'110', N'11', N'10', 0)
GO
INSERT [dbo].[Question] ([QnID], [Qn], [ImageName], [Option1], [Option2], [Option3], [Option4], [Answer]) VALUES (8, N'The binary system uses powers of', NULL, N'2', N'10', N'8', N'16', 0)
GO
INSERT [dbo].[Question] ([QnID], [Qn], [ImageName], [Option1], [Option2], [Option3], [Option4], [Answer]) VALUES (9, N'A computer program that convert sassembly language to machine language is', NULL, N'Compiler', N'Interpreter', N'Assembler', N'Comparator', 2)
GO
INSERT [dbo].[Question] ([QnID], [Qn], [ImageName], [Option1], [Option2], [Option3], [Option4], [Answer]) VALUES (10, N'You can add a row using SQL in a database with which of the following?', NULL, N'ADD', N'CREATE', N'INSERT', N'MAKE', 2)
GO
INSERT [dbo].[Question] ([QnID], [Qn], [ImageName], [Option1], [Option2], [Option3], [Option4], [Answer]) VALUES (11, N'The SQL keyword(s)________ is used with wildcards.', NULL, N'LIKE only', N'IN only', N'NOT IN only', N'IN and NOT IN', 0)
GO
INSERT [dbo].[Question] ([QnID], [Qn], [ImageName], [Option1], [Option2], [Option3], [Option4], [Answer]) VALUES (12, N'SQL query and modification commands make up a(n)', NULL, N'DDL', N'DML', N'HTML', N'XML', 1)
GO
INSERT [dbo].[Question] ([QnID], [Qn], [ImageName], [Option1], [Option2], [Option3], [Option4], [Answer]) VALUES (13, N'Inside which HTML element do we put the JavaScript?', NULL, N'<javascript>', N'<js>', N'<scripting>', N'<script>', 3)
GO
INSERT [dbo].[Question] ([QnID], [Qn], [ImageName], [Option1], [Option2], [Option3], [Option4], [Answer]) VALUES (14, N'The external Java Script file must contain the <script> tag.', NULL, N'True', N'False', NULL, NULL, 1)
GO
INSERT [dbo].[Question] ([QnID], [Qn], [ImageName], [Option1], [Option2], [Option3], [Option4], [Answer]) VALUES (15, N'How can you add a comment in a JavaScript?', NULL, N'''This is a comment', N'<!--This is a comment-->', N'//This is a comment', NULL, 2)
GO
INSERT [dbo].[Question] ([QnID], [Qn], [ImageName], [Option1], [Option2], [Option3], [Option4], [Answer]) VALUES (16, N'Name the following device.', N'q16.jpg', N'Graphics card', N'Keyboard', N'CPU', N'Mouse', 3)
GO
INSERT [dbo].[Question] ([QnID], [Qn], [ImageName], [Option1], [Option2], [Option3], [Option4], [Answer]) VALUES (17, N'Following picture represnts.', N'q17.png', N'Full Outer Join', N'Left Join', N'Right Join', N'Inner Join', 3)
GO
SET IDENTITY_INSERT [dbo].[Question] OFF
GO

