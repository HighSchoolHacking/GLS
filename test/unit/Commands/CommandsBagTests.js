"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var chai_1 = require("chai");
require("mocha");
var CommandsBag_1 = require("../../../lib/Commands/CommandsBag");
var LiteralCommand_1 = require("../../../lib/Commands/LiteralCommand");
var ConversionContext_1 = require("../../../lib/Conversions/ConversionContext");
var TypeScript_1 = require("../../../lib/Languages/TypeScript");
describe("CommandsBag", function () {
    describe("renderCommand", function () {
        it("retrieves a command by name", function () {
            // Arrange
            var commandsBag = new CommandsBag_1.CommandsBag(new ConversionContext_1.ConversionContext(new TypeScript_1.TypeScript()));
            // Act
            var command = commandsBag.getCommand("literal");
            // Assert
            chai_1.expect(command).that.be.instanceof(LiteralCommand_1.LiteralCommand);
        });
        it("throws an error for an unknown command", function () {
            // Arrange
            var commandsBag = new CommandsBag_1.CommandsBag(new ConversionContext_1.ConversionContext(new TypeScript_1.TypeScript()));
            // Act
            var action = function () { return commandsBag.getCommand("definitely not a command"); };
            // Assert
            chai_1.expect(action).to.throw();
        });
    });
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlc3QvdW5pdC9Db21tYW5kcy9Db21tYW5kc0JhZ1Rlc3RzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsNkJBQThCO0FBQzlCLGlCQUFlO0FBRWYsaUVBQWdFO0FBQ2hFLHVFQUFzRTtBQUN0RSxnRkFBK0U7QUFDL0UsZ0VBQStEO0FBRS9ELFFBQVEsQ0FBQyxhQUFhLEVBQUU7SUFDcEIsUUFBUSxDQUFDLGVBQWUsRUFBRTtRQUN0QixFQUFFLENBQUMsNkJBQTZCLEVBQUU7WUFDOUIsVUFBVTtZQUNWLElBQU0sV0FBVyxHQUFHLElBQUkseUJBQVcsQ0FBQyxJQUFJLHFDQUFpQixDQUFDLElBQUksdUJBQVUsRUFBRSxDQUFDLENBQUMsQ0FBQztZQUU3RSxNQUFNO1lBQ04sSUFBTSxPQUFPLEdBQUcsV0FBVyxDQUFDLFVBQVUsQ0FBQyxTQUFTLENBQUMsQ0FBQztZQUVsRCxTQUFTO1lBQ1QsYUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsVUFBVSxDQUFDLCtCQUFjLENBQUMsQ0FBQztRQUN2RCxDQUFDLENBQUMsQ0FBQztRQUVILEVBQUUsQ0FBQyx3Q0FBd0MsRUFBRTtZQUN6QyxVQUFVO1lBQ1YsSUFBTSxXQUFXLEdBQUcsSUFBSSx5QkFBVyxDQUFDLElBQUkscUNBQWlCLENBQUMsSUFBSSx1QkFBVSxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBRTdFLE1BQU07WUFDTixJQUFNLE1BQU0sR0FBRyxjQUFNLE9BQUEsV0FBVyxDQUFDLFVBQVUsQ0FBQywwQkFBMEIsQ0FBQyxFQUFsRCxDQUFrRCxDQUFDO1lBRXhFLFNBQVM7WUFDVCxhQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQzlCLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQyxDQUFDLENBQUM7QUFDUCxDQUFDLENBQUMsQ0FBQyIsImZpbGUiOiJ0ZXN0L3VuaXQvQ29tbWFuZHMvQ29tbWFuZHNCYWdUZXN0cy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGV4cGVjdCB9IGZyb20gXCJjaGFpXCI7XHJcbmltcG9ydCBcIm1vY2hhXCI7XHJcblxyXG5pbXBvcnQgeyBDb21tYW5kc0JhZyB9IGZyb20gXCIuLi8uLi8uLi9saWIvQ29tbWFuZHMvQ29tbWFuZHNCYWdcIjtcclxuaW1wb3J0IHsgTGl0ZXJhbENvbW1hbmQgfSBmcm9tIFwiLi4vLi4vLi4vbGliL0NvbW1hbmRzL0xpdGVyYWxDb21tYW5kXCI7XHJcbmltcG9ydCB7IENvbnZlcnNpb25Db250ZXh0IH0gZnJvbSBcIi4uLy4uLy4uL2xpYi9Db252ZXJzaW9ucy9Db252ZXJzaW9uQ29udGV4dFwiO1xyXG5pbXBvcnQgeyBUeXBlU2NyaXB0IH0gZnJvbSBcIi4uLy4uLy4uL2xpYi9MYW5ndWFnZXMvVHlwZVNjcmlwdFwiO1xyXG5cclxuZGVzY3JpYmUoXCJDb21tYW5kc0JhZ1wiLCAoKSA9PiB7XHJcbiAgICBkZXNjcmliZShcInJlbmRlckNvbW1hbmRcIiwgKCkgPT4ge1xyXG4gICAgICAgIGl0KFwicmV0cmlldmVzIGEgY29tbWFuZCBieSBuYW1lXCIsICgpID0+IHtcclxuICAgICAgICAgICAgLy8gQXJyYW5nZVxyXG4gICAgICAgICAgICBjb25zdCBjb21tYW5kc0JhZyA9IG5ldyBDb21tYW5kc0JhZyhuZXcgQ29udmVyc2lvbkNvbnRleHQobmV3IFR5cGVTY3JpcHQoKSkpO1xyXG5cclxuICAgICAgICAgICAgLy8gQWN0XHJcbiAgICAgICAgICAgIGNvbnN0IGNvbW1hbmQgPSBjb21tYW5kc0JhZy5nZXRDb21tYW5kKFwibGl0ZXJhbFwiKTtcclxuXHJcbiAgICAgICAgICAgIC8vIEFzc2VydFxyXG4gICAgICAgICAgICBleHBlY3QoY29tbWFuZCkudGhhdC5iZS5pbnN0YW5jZW9mKExpdGVyYWxDb21tYW5kKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgaXQoXCJ0aHJvd3MgYW4gZXJyb3IgZm9yIGFuIHVua25vd24gY29tbWFuZFwiLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIC8vIEFycmFuZ2VcclxuICAgICAgICAgICAgY29uc3QgY29tbWFuZHNCYWcgPSBuZXcgQ29tbWFuZHNCYWcobmV3IENvbnZlcnNpb25Db250ZXh0KG5ldyBUeXBlU2NyaXB0KCkpKTtcclxuXHJcbiAgICAgICAgICAgIC8vIEFjdFxyXG4gICAgICAgICAgICBjb25zdCBhY3Rpb24gPSAoKSA9PiBjb21tYW5kc0JhZy5nZXRDb21tYW5kKFwiZGVmaW5pdGVseSBub3QgYSBjb21tYW5kXCIpO1xyXG5cclxuICAgICAgICAgICAgLy8gQXNzZXJ0XHJcbiAgICAgICAgICAgIGV4cGVjdChhY3Rpb24pLnRvLnRocm93KCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxufSk7XHJcbiJdfQ==
