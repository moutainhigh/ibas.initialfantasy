/**
 * @license
 * Copyright Color-Coding Studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */
namespace initialfantasy {
    export namespace bo {
        /** 应用程序平台 */
        export class ApplicationPlatform extends ibas.BOSimple<ApplicationPlatform> implements IApplicationPlatform {

            /** 业务对象编码 */
            static BUSINESS_OBJECT_CODE: string = BO_CODE_APPLICATIONPLATFORM;
            /** 构造函数 */
            constructor() {
                super();
            }
            /** 映射的属性名称-平台标识 */
            static PROPERTY_PLATFORMID_NAME: string = "PlatformId";
            /** 获取-平台标识 */
            get platformId(): string {
                return this.getProperty<string>(ApplicationPlatform.PROPERTY_PLATFORMID_NAME);
            }
            /** 设置-平台标识 */
            set platformId(value: string) {
                this.setProperty(ApplicationPlatform.PROPERTY_PLATFORMID_NAME, value);
            }

            /** 映射的属性名称-平台编码 */
            static PROPERTY_PLATFORMCODE_NAME: string = "PlatformCode";
            /** 获取-平台编码 */
            get platformCode(): string {
                return this.getProperty<string>(ApplicationPlatform.PROPERTY_PLATFORMCODE_NAME);
            }
            /** 设置-平台编码 */
            set platformCode(value: string) {
                this.setProperty(ApplicationPlatform.PROPERTY_PLATFORMCODE_NAME, value);
            }

            /** 映射的属性名称-平台描述 */
            static PROPERTY_PLATFORMDESCRIPTION_NAME: string = "PlatformDescription";
            /** 获取-平台描述 */
            get platformDescription(): string {
                return this.getProperty<string>(ApplicationPlatform.PROPERTY_PLATFORMDESCRIPTION_NAME);
            }
            /** 设置-平台描述 */
            set platformDescription(value: string) {
                this.setProperty(ApplicationPlatform.PROPERTY_PLATFORMDESCRIPTION_NAME, value);
            }

            /** 映射的属性名称-是否可用 */
            static PROPERTY_ACTIVATED_NAME: string = "Activated";
            /** 获取-是否可用 */
            get activated(): ibas.emYesNo {
                return this.getProperty<ibas.emYesNo>(ApplicationPlatform.PROPERTY_ACTIVATED_NAME);
            }
            /** 设置-是否可用 */
            set activated(value: ibas.emYesNo) {
                this.setProperty(ApplicationPlatform.PROPERTY_ACTIVATED_NAME, value);
            }

            /** 映射的属性名称-对象键值 */
            static PROPERTY_OBJECTKEY_NAME: string = "ObjectKey";
            /** 获取-对象键值 */
            get objectKey(): number {
                return this.getProperty<number>(ApplicationPlatform.PROPERTY_OBJECTKEY_NAME);
            }
            /** 设置-对象键值 */
            set objectKey(value: number) {
                this.setProperty(ApplicationPlatform.PROPERTY_OBJECTKEY_NAME, value);
            }

            /** 映射的属性名称-对象类型 */
            static PROPERTY_OBJECTCODE_NAME: string = "ObjectCode";
            /** 获取-对象类型 */
            get objectCode(): string {
                return this.getProperty<string>(ApplicationPlatform.PROPERTY_OBJECTCODE_NAME);
            }
            /** 设置-对象类型 */
            set objectCode(value: string) {
                this.setProperty(ApplicationPlatform.PROPERTY_OBJECTCODE_NAME, value);
            }

            /** 映射的属性名称-数据源 */
            static PROPERTY_DATASOURCE_NAME: string = "DataSource";
            /** 获取-数据源 */
            get dataSource(): string {
                return this.getProperty<string>(ApplicationPlatform.PROPERTY_DATASOURCE_NAME);
            }
            /** 设置-数据源 */
            set dataSource(value: string) {
                this.setProperty(ApplicationPlatform.PROPERTY_DATASOURCE_NAME, value);
            }

            /** 映射的属性名称-创建日期 */
            static PROPERTY_CREATEDATE_NAME: string = "CreateDate";
            /** 获取-创建日期 */
            get createDate(): Date {
                return this.getProperty<Date>(ApplicationPlatform.PROPERTY_CREATEDATE_NAME);
            }
            /** 设置-创建日期 */
            set createDate(value: Date) {
                this.setProperty(ApplicationPlatform.PROPERTY_CREATEDATE_NAME, value);
            }

            /** 映射的属性名称-创建时间 */
            static PROPERTY_CREATETIME_NAME: string = "CreateTime";
            /** 获取-创建时间 */
            get createTime(): number {
                return this.getProperty<number>(ApplicationPlatform.PROPERTY_CREATETIME_NAME);
            }
            /** 设置-创建时间 */
            set createTime(value: number) {
                this.setProperty(ApplicationPlatform.PROPERTY_CREATETIME_NAME, value);
            }

            /** 映射的属性名称-修改日期 */
            static PROPERTY_UPDATEDATE_NAME: string = "UpdateDate";
            /** 获取-修改日期 */
            get updateDate(): Date {
                return this.getProperty<Date>(ApplicationPlatform.PROPERTY_UPDATEDATE_NAME);
            }
            /** 设置-修改日期 */
            set updateDate(value: Date) {
                this.setProperty(ApplicationPlatform.PROPERTY_UPDATEDATE_NAME, value);
            }

            /** 映射的属性名称-修改时间 */
            static PROPERTY_UPDATETIME_NAME: string = "UpdateTime";
            /** 获取-修改时间 */
            get updateTime(): number {
                return this.getProperty<number>(ApplicationPlatform.PROPERTY_UPDATETIME_NAME);
            }
            /** 设置-修改时间 */
            set updateTime(value: number) {
                this.setProperty(ApplicationPlatform.PROPERTY_UPDATETIME_NAME, value);
            }

            /** 映射的属性名称-创建动作标识 */
            static PROPERTY_CREATEACTIONID_NAME: string = "CreateActionId";
            /** 获取-创建动作标识 */
            get createActionId(): string {
                return this.getProperty<string>(ApplicationPlatform.PROPERTY_CREATEACTIONID_NAME);
            }
            /** 设置-创建动作标识 */
            set createActionId(value: string) {
                this.setProperty(ApplicationPlatform.PROPERTY_CREATEACTIONID_NAME, value);
            }

            /** 映射的属性名称-更新动作标识 */
            static PROPERTY_UPDATEACTIONID_NAME: string = "UpdateActionId";
            /** 获取-更新动作标识 */
            get updateActionId(): string {
                return this.getProperty<string>(ApplicationPlatform.PROPERTY_UPDATEACTIONID_NAME);
            }
            /** 设置-更新动作标识 */
            set updateActionId(value: string) {
                this.setProperty(ApplicationPlatform.PROPERTY_UPDATEACTIONID_NAME, value);
            }

            /** 映射的属性名称-实例号（版本） */
            static PROPERTY_LOGINST_NAME: string = "LogInst";
            /** 获取-实例号（版本） */
            get logInst(): number {
                return this.getProperty<number>(ApplicationPlatform.PROPERTY_LOGINST_NAME);
            }
            /** 设置-实例号（版本） */
            set logInst(value: number) {
                this.setProperty(ApplicationPlatform.PROPERTY_LOGINST_NAME, value);
            }

            /** 映射的属性名称-创建用户 */
            static PROPERTY_CREATEUSERSIGN_NAME: string = "CreateUserSign";
            /** 获取-创建用户 */
            get createUserSign(): number {
                return this.getProperty<number>(ApplicationPlatform.PROPERTY_CREATEUSERSIGN_NAME);
            }
            /** 设置-创建用户 */
            set createUserSign(value: number) {
                this.setProperty(ApplicationPlatform.PROPERTY_CREATEUSERSIGN_NAME, value);
            }

            /** 映射的属性名称-修改用户 */
            static PROPERTY_UPDATEUSERSIGN_NAME: string = "UpdateUserSign";
            /** 获取-修改用户 */
            get updateUserSign(): number {
                return this.getProperty<number>(ApplicationPlatform.PROPERTY_UPDATEUSERSIGN_NAME);
            }
            /** 设置-修改用户 */
            set updateUserSign(value: number) {
                this.setProperty(ApplicationPlatform.PROPERTY_UPDATEUSERSIGN_NAME, value);
            }

            /** 初始化数据 */
            protected init(): void {
                this.objectCode = ibas.config.applyVariables(ApplicationPlatform.BUSINESS_OBJECT_CODE);
            }
        }

    }
}