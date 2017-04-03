"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var chai_1 = require("chai");
require("mocha");
var ConversionContext_1 = require("../../lib/Conversions/ConversionContext");
var GlsParser_1 = require("../../lib/Conversions/GlsParser");
var TypeScript_1 = require("../../lib/Languages/TypeScript");
describe("GlsParser", function () {
    describe("parseCommand", function () {
        it("parses a single command", function () {
            // Arrange
            var parser = new GlsParser_1.GlsParser(new ConversionContext_1.ConversionContext(new TypeScript_1.TypeScript()));
            var command = "literal";
            var parameters = "aaa bbb ccc";
            var line = command + " : " + parameters;
            // Act
            var parsed = parser.parseCommand(line);
            // Assert
            chai_1.expect(parsed).to.be.deep.equal({
                addSemicolon: false,
                addedImports: {},
                commandResults: [
                    {
                        indentation: 0,
                        text: "aaa bbb ccc"
                    }
                ]
            });
        });
        it("parses a single recursive command", function () {
            // Arrange
            var parser = new GlsParser_1.GlsParser(new ConversionContext_1.ConversionContext(new TypeScript_1.TypeScript()));
            var command = "literal";
            var parameters = "aaa bbb ccc";
            var line = "( " + command + " : " + parameters + " )";
            // Act
            var parsed = parser.parseCommand(line);
            // Assert
            chai_1.expect(parsed).to.be.deep.equal({
                indentation: 0,
                lines: [line],
                text: "aaa bbb ccc"
            });
        });
    });
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkdsc1BhcnNlclRlc3RzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsNkJBQThCO0FBQzlCLGlCQUFlO0FBRWYsNkVBQTRFO0FBQzVFLDZEQUE0RDtBQUM1RCw2REFBNEQ7QUFFNUQsUUFBUSxDQUFDLFdBQVcsRUFBRTtJQUNsQixRQUFRLENBQUMsY0FBYyxFQUFFO1FBQ3JCLEVBQUUsQ0FBQyx5QkFBeUIsRUFBRTtZQUMxQixVQUFVO1lBQ1YsSUFBTSxNQUFNLEdBQUcsSUFBSSxxQkFBUyxDQUFDLElBQUkscUNBQWlCLENBQUMsSUFBSSx1QkFBVSxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQ3RFLElBQU0sT0FBTyxHQUFHLFNBQVMsQ0FBQztZQUMxQixJQUFNLFVBQVUsR0FBRyxhQUFhLENBQUM7WUFDakMsSUFBTSxJQUFJLEdBQU0sT0FBTyxXQUFNLFVBQVksQ0FBQztZQUUxQyxNQUFNO1lBQ04sSUFBTSxNQUFNLEdBQUcsTUFBTSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUV6QyxTQUFTO1lBQ1QsYUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQztnQkFDNUIsWUFBWSxFQUFFLEtBQUs7Z0JBQ25CLFlBQVksRUFBRSxFQUFFO2dCQUNoQixjQUFjLEVBQUU7b0JBQ1o7d0JBQ0ksV0FBVyxFQUFFLENBQUM7d0JBQ2QsSUFBSSxFQUFFLGFBQWE7cUJBQ3RCO2lCQUNKO2FBQ0osQ0FBQyxDQUFDO1FBQ1AsQ0FBQyxDQUFDLENBQUM7UUFFSCxFQUFFLENBQUMsbUNBQW1DLEVBQUU7WUFDcEMsVUFBVTtZQUNWLElBQU0sTUFBTSxHQUFHLElBQUkscUJBQVMsQ0FBQyxJQUFJLHFDQUFpQixDQUFDLElBQUksdUJBQVUsRUFBRSxDQUFDLENBQUMsQ0FBQztZQUN0RSxJQUFNLE9BQU8sR0FBRyxTQUFTLENBQUM7WUFDMUIsSUFBTSxVQUFVLEdBQUcsYUFBYSxDQUFDO1lBQ2pDLElBQU0sSUFBSSxHQUFHLE9BQUssT0FBTyxXQUFNLFVBQVUsT0FBSSxDQUFDO1lBRTlDLE1BQU07WUFDTixJQUFNLE1BQU0sR0FBRyxNQUFNLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBRXpDLFNBQVM7WUFDVCxhQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDO2dCQUM1QixXQUFXLEVBQUUsQ0FBQztnQkFDZCxLQUFLLEVBQUUsQ0FBQyxJQUFJLENBQUM7Z0JBQ2IsSUFBSSxFQUFFLGFBQWE7YUFDdEIsQ0FBQyxDQUFDO1FBQ1AsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDLENBQUMsQ0FBQztBQUNQLENBQUMsQ0FBQyxDQUFDIiwiZmlsZSI6Ikdsc1BhcnNlclRlc3RzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZXhwZWN0IH0gZnJvbSBcImNoYWlcIjtcclxuaW1wb3J0IFwibW9jaGFcIjtcclxuXHJcbmltcG9ydCB7IENvbnZlcnNpb25Db250ZXh0IH0gZnJvbSBcIi4uLy4uL2xpYi9Db252ZXJzaW9ucy9Db252ZXJzaW9uQ29udGV4dFwiO1xyXG5pbXBvcnQgeyBHbHNQYXJzZXIgfSBmcm9tIFwiLi4vLi4vbGliL0NvbnZlcnNpb25zL0dsc1BhcnNlclwiO1xyXG5pbXBvcnQgeyBUeXBlU2NyaXB0IH0gZnJvbSBcIi4uLy4uL2xpYi9MYW5ndWFnZXMvVHlwZVNjcmlwdFwiO1xyXG5cclxuZGVzY3JpYmUoXCJHbHNQYXJzZXJcIiwgKCkgPT4ge1xyXG4gICAgZGVzY3JpYmUoXCJwYXJzZUNvbW1hbmRcIiwgKCkgPT4ge1xyXG4gICAgICAgIGl0KFwicGFyc2VzIGEgc2luZ2xlIGNvbW1hbmRcIiwgKCkgPT4ge1xyXG4gICAgICAgICAgICAvLyBBcnJhbmdlXHJcbiAgICAgICAgICAgIGNvbnN0IHBhcnNlciA9IG5ldyBHbHNQYXJzZXIobmV3IENvbnZlcnNpb25Db250ZXh0KG5ldyBUeXBlU2NyaXB0KCkpKTtcclxuICAgICAgICAgICAgY29uc3QgY29tbWFuZCA9IFwibGl0ZXJhbFwiO1xyXG4gICAgICAgICAgICBjb25zdCBwYXJhbWV0ZXJzID0gXCJhYWEgYmJiIGNjY1wiO1xyXG4gICAgICAgICAgICBjb25zdCBsaW5lID0gYCR7Y29tbWFuZH0gOiAke3BhcmFtZXRlcnN9YDtcclxuXHJcbiAgICAgICAgICAgIC8vIEFjdFxyXG4gICAgICAgICAgICBjb25zdCBwYXJzZWQgPSBwYXJzZXIucGFyc2VDb21tYW5kKGxpbmUpO1xyXG5cclxuICAgICAgICAgICAgLy8gQXNzZXJ0XHJcbiAgICAgICAgICAgIGV4cGVjdChwYXJzZWQpLnRvLmJlLmRlZXAuZXF1YWwoe1xyXG4gICAgICAgICAgICAgICAgYWRkU2VtaWNvbG9uOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIGFkZGVkSW1wb3J0czoge30sXHJcbiAgICAgICAgICAgICAgICBjb21tYW5kUmVzdWx0czogW1xyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaW5kZW50YXRpb246IDAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ6IFwiYWFhIGJiYiBjY2NcIlxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGl0KFwicGFyc2VzIGEgc2luZ2xlIHJlY3Vyc2l2ZSBjb21tYW5kXCIsICgpID0+IHtcclxuICAgICAgICAgICAgLy8gQXJyYW5nZVxyXG4gICAgICAgICAgICBjb25zdCBwYXJzZXIgPSBuZXcgR2xzUGFyc2VyKG5ldyBDb252ZXJzaW9uQ29udGV4dChuZXcgVHlwZVNjcmlwdCgpKSk7XHJcbiAgICAgICAgICAgIGNvbnN0IGNvbW1hbmQgPSBcImxpdGVyYWxcIjtcclxuICAgICAgICAgICAgY29uc3QgcGFyYW1ldGVycyA9IFwiYWFhIGJiYiBjY2NcIjtcclxuICAgICAgICAgICAgY29uc3QgbGluZSA9IGAoICR7Y29tbWFuZH0gOiAke3BhcmFtZXRlcnN9IClgO1xyXG5cclxuICAgICAgICAgICAgLy8gQWN0XHJcbiAgICAgICAgICAgIGNvbnN0IHBhcnNlZCA9IHBhcnNlci5wYXJzZUNvbW1hbmQobGluZSk7XHJcblxyXG4gICAgICAgICAgICAvLyBBc3NlcnRcclxuICAgICAgICAgICAgZXhwZWN0KHBhcnNlZCkudG8uYmUuZGVlcC5lcXVhbCh7XHJcbiAgICAgICAgICAgICAgICBpbmRlbnRhdGlvbjogMCxcclxuICAgICAgICAgICAgICAgIGxpbmVzOiBbbGluZV0sXHJcbiAgICAgICAgICAgICAgICB0ZXh0OiBcImFhYSBiYmIgY2NjXCJcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxufSk7XHJcbiJdfQ==
