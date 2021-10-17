---
title: Empowering developers without weakening security posture
date: '2021-10-17'
tags: ['aws', 'iam']
draft: false
summary: Learn how to implement IAM permissions boundaries as a mechanism to empower developers to create roles without weakening security posture
---

So, you want to allow developers to create IAM roles without compromising security? You're in the right place!

Permissions boundaries are very much the answer. This feature of IAM allows for a policy to be attached to a user or role which defines the maximum permissions that a user can have. Note that if a permissions boundary is being applied to a user, a resource policy will not be limited by an implicit deny in the permissions boundary policy.

One common problem that organisations face in AWS is how to allow developers to deploy new roles (such as one for a Lamdba function) without opening the possibility of privilege escalation. Privilege escalation in the context of AWS is often seen where a developer has the ability to create roles as well as manage the policies that are attached to their user or role. As long as they have this, a new role can be created that can be assumed by the developer's IAM entity with any permissions. You see the problem, right? Now I'm going to show you how to solve it!

First up, let's set the scene. Inside our AWS account, developers can do anything they want except for access the S3 bucket with HR records in. This bucket will be called `sensitive-hr-records`. We want to make sure that our developers can work effectively without opening the door to privilege escalation. Let's start with a policy that allows our developers to have full access, except for that bucket. For brevity, only the `Statement` portion of the policy document is shown.

```yml
Statement:
  - Sid: 'GrantFullAccess'
    Effect: 'Allow'
    Action: '*'
    Resource: '*'
  - Sid: 'DenyHRBucketAccess'
    Effect: 'Deny'
    Action: 's3:*'
    Resource:
      - 'arn:aws:s3:::sensitive-hr-records'
      - 'arn:aws:s3:::sensitive-hr-records/*'
```

Next up, we need to construct the policy document for the permissions boundary. To start with, the policy will look identical to the policy we applied to the developer role. 

First of all, we need to add a statement that prevents our developers from creating any new IAM entities or amending the permissions of existing entities unless our permissions boundary is attached.

```yml
- Sid: 'DenyCreateOrChangeWithoutBoundary'
  Effect: 'Deny'
  Action:
    - 'iam:CreateUser'
    - 'iam:DeleteUserPolicy'
    - 'iam:AttachUserPolicy'
    - 'iam:DetachUserPolicy'
    - 'iam:PutUserPermissionsBoundary'
    - 'iam:PutUserPolicy'
    - 'iam:CreateRole'
    - 'iam:DeleteRolePolicy'
    - 'iam:AttachRolePolicy'
    - 'iam:DetachRolePolicy'
    - 'iam:PutRolePermissionsBoundary'
    - 'iam:PutRolePolicy'
  Resource: '*'
  Condition:
    StringNotEquals:
      'iam:PermissionsBoundary': 'arn:aws:iam::123456789012:policy/pb/DeveloperPermissionsBoundary'
```

Next up, we want to make sure that the developers can't delete permissions boundaries from any IAM entities.

```yml
- Sid: 'DenyDeletePermissionsBoundary'
  Effect: 'Deny'
  Action:
    - 'iam:DeleteUserPermissionsBoundary'
    - 'iam:DeleteRolePermissionsBoundary'
  Resource: '*'
```

Finally, we need to add a statement to prevent developers from amending the permissions boundary itself.

```yml
- Sid: 'DenyEditPermissionsBoundary'
  Effect: 'Deny'
  Action:
    - 'iam:CreatePolicyVersion'
    - 'iam:DeletePolicy'
    - 'iam:DeletePolicyVersion'
    - 'iam:SetDefaultPolicyVersion'
  Resource: 'arn:aws:iam::123456789012:policy/pb/DeveloperPermissionsBoundary'
```

When this is all put together, the permissions boundary policy statement looks like below.

```yml
Statement:
  - Sid: 'GrantFullAccess'
    Effect: 'Allow'
    Action: '*'
    Resource: '*'
  - Sid: 'DenyHRBucketAccess'
    Effect: 'Deny'
    Action: 's3:*'
    Resource:
      - 'arn:aws:s3:::sensitive-hr-records'
      - 'arn:aws:s3:::sensitive-hr-records/*'
  - Sid: 'DenyCreateOrChangeWithoutBoundary'
    Effect: 'Deny'
    Action:
      - 'iam:CreateUser'
      - 'iam:DeleteUserPolicy'
      - 'iam:AttachUserPolicy'
      - 'iam:DetachUserPolicy'
      - 'iam:PutUserPermissionsBoundary'
      - 'iam:PutUserPolicy'
      - 'iam:CreateRole'
      - 'iam:DeleteRolePolicy'
      - 'iam:AttachRolePolicy'
      - 'iam:DetachRolePolicy'
      - 'iam:PutRolePermissionsBoundary'
      - 'iam:PutRolePolicy'
    Resource: '*'
    Condition:
      StringNotEquals:
        'iam:PermissionsBoundary': 'arn:aws:iam::123456789012:policy/pb/DeveloperPermissionsBoundary'
  - Sid: 'DenyDeletePermissionsBoundary'
    Effect: 'Deny'
    Action:
      - 'iam:DeleteUserPermissionsBoundary'
      - 'iam:DeleteRolePermissionsBoundary'
    Resource: '*'
  - Sid: 'DenyEditPermissionsBoundary'
    Effect: 'Deny'
    Action:
      - 'iam:CreatePolicyVersion'
      - 'iam:DeletePolicy'
      - 'iam:DeletePolicyVersion'
      - 'iam:SetDefaultPolicyVersion'
    Resource: 'arn:aws:iam::123456789012:policy/pb/DeveloperPermissionsBoundary'
```

With the combination of the developer role policy that we saw at the very start and our final permissions boundary statement, we've put together a solid foundation for empowering developers within the cloud whilst not compromising on security.

**Useful resources**

- [AWS documentation](https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_boundaries.html)
- [AWS well-architected lab](https://www.wellarchitectedlabs.com/security/300_labs/300_iam_permission_boundaries_delegating_role_creation/)
- [Other ways that privilege escalation can occur in AWS](https://rhinosecuritylabs.com/aws/aws-privilege-escalation-methods-mitigation/)