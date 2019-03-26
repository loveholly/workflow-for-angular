[![Build Status](https://travis-ci.org/loveholly/workflow-for-angular.svg?branch=master)](https://travis-ci.org/loveholly/workflow-for-angular)

# WorkflowForAngular

该项目仅仅是个人用于测试git工作流的测试项目，无任何实际意义

经测试发现PR的时候采用squash merge的方式会产生奇怪的行为，最终可能导致conflict的出现

目前还在验证中

结论如下：

feature分支合并到开发基准分支，例如`develop`，提PR，并且使用squash merge策略，开发基准分支合并到发布分支，例如`master`，则在本地rebase完开发基准分支，再push到远程。