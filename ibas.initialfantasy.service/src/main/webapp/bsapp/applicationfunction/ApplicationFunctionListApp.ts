/**
 * @license
 * Copyright color-coding studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */

import * as ibas from "ibas/index";
import * as bo from "../../borep/bo/index";
import { BORepositoryInitialFantasy } from "../../borep/BORepositories";
import { ApplicationFunctionViewApp } from "./ApplicationFunctionViewApp";
import { ApplicationFunctionEditApp } from "./ApplicationFunctionEditApp";

/** 列表应用-应用程序功能 */
export class ApplicationFunctionListApp extends ibas.BOListApplication<IApplicationFunctionListView, bo.ApplicationFunction> {

    /** 应用标识 */
    static APPLICATION_ID: string = "e70cc787-664d-479a-a1aa-2dbb7b559d58";
    /** 应用名称 */
    static APPLICATION_NAME: string = "initialfantasy_app_applicationfunction_list";
    /** 业务对象编码 */
    static BUSINESS_OBJECT_CODE: string = bo.ApplicationFunction.BUSINESS_OBJECT_CODE;
    /** 构造函数 */
    constructor() {
        super();
        this.id = ApplicationFunctionListApp.APPLICATION_ID;
        this.name = ApplicationFunctionListApp.APPLICATION_NAME;
        this.boCode = ApplicationFunctionListApp.BUSINESS_OBJECT_CODE;
        this.description = ibas.i18n.prop(this.name);
    }
    /** 注册视图 */
    protected registerView(): void {
        super.registerView();
        // 其他事件
        this.view.editDataEvent = this.editData;
        this.view.deleteDataEvent = this.deleteData;
        this.view.registerFunctionsEvent = this.registerFunctions;
    }
    /** 视图显示后 */
    protected viewShowed(): void {
        // 视图加载完成
    }
    /** 查询数据 */
    protected fetchData(criteria: ibas.ICriteria): void {
        this.busy(true);
        let that: this = this;
        let boRepository: BORepositoryInitialFantasy = new BORepositoryInitialFantasy();
        boRepository.fetchApplicationFunction({
            criteria: criteria,
            onCompleted(opRslt: ibas.IOperationResult<bo.ApplicationFunction>): void {
                try {
                    if (opRslt.resultCode !== 0) {
                        throw new Error(opRslt.message);
                    }
                    that.view.showData(opRslt.resultObjects);
                    that.busy(false);
                } catch (error) {
                    that.messages(error);
                }
            }
        });
        this.proceeding(ibas.emMessageType.INFORMATION, ibas.i18n.prop("sys_shell_fetching_data"));
    }
    /** 新建数据 */
    protected newData(): void {
        let app: ApplicationFunctionEditApp = new ApplicationFunctionEditApp();
        app.navigation = this.navigation;
        app.viewShower = this.viewShower;
        app.run();
    }
    /** 查看数据，参数：目标数据 */
    protected viewData(data: bo.ApplicationFunction): void {
        // 检查目标数据
        if (ibas.objects.isNull(data)) {
            this.messages(ibas.emMessageType.WARNING, ibas.i18n.prop("sys_shell_please_chooose_data",
                ibas.i18n.prop("sys_shell_data_view")
            ));
            return;
        }
        let app: ApplicationFunctionViewApp = new ApplicationFunctionViewApp();
        app.navigation = this.navigation;
        app.viewShower = this.viewShower;
        app.run(data);

    }
    /** 编辑数据，参数：目标数据 */
    protected editData(data: bo.ApplicationFunction): void {
        // 检查目标数据
        if (ibas.objects.isNull(data)) {
            this.messages(ibas.emMessageType.WARNING, ibas.i18n.prop("sys_shell_please_chooose_data",
                ibas.i18n.prop("sys_shell_data_edit")
            ));
            return;
        }
        let app: ApplicationFunctionEditApp = new ApplicationFunctionEditApp();
        app.navigation = this.navigation;
        app.viewShower = this.viewShower;
        app.run(data);
    }
    /** 删除数据，参数：目标数据集合 */
    protected deleteData(data: bo.ApplicationFunction): void {
        // 检查目标数据
        if (ibas.objects.isNull(data)) {
            this.messages(ibas.emMessageType.WARNING, ibas.i18n.prop("sys_shell_please_chooose_data",
                ibas.i18n.prop("sys_shell_data_delete")
            ));
            return;
        }
        let beDeleteds: ibas.ArrayList<bo.ApplicationFunction> = new ibas.ArrayList<bo.ApplicationFunction>();
        if (data instanceof Array) {
            for (let item of data) {
                if (ibas.objects.instanceOf(item, bo.ApplicationFunction)) {
                    item.delete();
                    beDeleteds.add(item);
                }
            }
        }
        // 没有选择删除的对象
        if (beDeleteds.length === 0) {
            return;
        }
        let that: this = this;
        this.messages({
            type: ibas.emMessageType.QUESTION,
            title: ibas.i18n.prop(this.name),
            message: ibas.i18n.prop("sys_shell_whether_to_delete", beDeleteds.length),
            actions: [ibas.emMessageAction.YES, ibas.emMessageAction.NO],
            onCompleted(action: ibas.emMessageAction): void {
                if (action === ibas.emMessageAction.YES) {
                    try {
                        let boRepository: BORepositoryInitialFantasy = new BORepositoryInitialFantasy();
                        let saveMethod: Function = function (beSaved: bo.ApplicationFunction): void {
                            boRepository.saveApplicationFunction({
                                beSaved: beSaved,
                                onCompleted(opRslt: ibas.IOperationResult<bo.ApplicationFunction>): void {
                                    try {
                                        if (opRslt.resultCode !== 0) {
                                            throw new Error(opRslt.message);
                                        }
                                        // 保存下一个数据
                                        let index: number = beDeleteds.indexOf(beSaved) + 1;
                                        if (index > 0 && index < beDeleteds.length) {
                                            saveMethod(beDeleteds[index]);
                                        } else {
                                            // 处理完成
                                            that.busy(false);
                                            that.messages(ibas.emMessageType.SUCCESS,
                                                ibas.i18n.prop("sys_shell_data_delete") + ibas.i18n.prop("sys_shell_sucessful"));
                                        }
                                    } catch (error) {
                                        that.messages(ibas.emMessageType.ERROR,
                                            ibas.i18n.prop("sys_shell_data_delete_error", beSaved, error.message));
                                    }
                                }
                            });
                            that.proceeding(ibas.emMessageType.INFORMATION, ibas.i18n.prop("sys_shell_data_deleting", beSaved));
                        };
                        that.busy(true);
                        // 开始保存
                        saveMethod(beDeleteds.firstOrDefault());
                    } catch (error) {
                        that.busy(false);
                        that.messages(error);
                    }
                }
            }
        });
    }
    private registerFunctions(): void {
        let modules: ibas.List<ibas.IModule> = ibas.variablesManager.getWatcher().modules();
        let that: this = this;
        let criteria: ibas.ICriteria = new ibas.Criteria();
        let conditionModule: ibas.ICondition = criteria.conditions.create();
        conditionModule.alias = bo.ApplicationFunction.PROPERTY_MODULEID_NAME;
        conditionModule.operation = ibas.emConditionOperation.EQUAL;
        let conditionFunction: ibas.ICondition = criteria.conditions.create();
        conditionFunction.alias = bo.ApplicationFunction.PROPERTY_FUNCTIONID_NAME;
        conditionFunction.operation = ibas.emConditionOperation.EQUAL;
        let boRepository: BORepositoryInitialFantasy = new BORepositoryInitialFantasy();
        for (let module of modules) {
            this.proceeding(ibas.emMessageType.INFORMATION, ibas.i18n.prop("initialfantasy_register_module_functions", module.description));
            conditionModule.value = module.id;
            for (let func of module.functions()) {
                conditionFunction.value = func.id;
                boRepository.fetchApplicationFunction({
                    criteria: criteria,
                    onCompleted(opRslt: ibas.IOperationResult<bo.ApplicationFunction>): void {
                        try {
                            if (opRslt.resultCode === 0 && opRslt.resultObjects.length === 0) {
                                let boFunc: bo.ApplicationFunction = new bo.ApplicationFunction;
                                boFunc.moduleId = module.id;
                                boFunc.functionId = func.id;
                                boFunc.functionName = func.name;
                                boRepository.saveApplicationFunction({
                                    beSaved: boFunc,
                                    onCompleted(opRslt: ibas.IOperationResult<bo.ApplicationFunction>): void {
                                        try {
                                            if (opRslt.resultCode !== 0) {
                                                throw new Error(opRslt.message);
                                            }
                                        } catch (error) {
                                            that.proceeding(error);
                                        }
                                    }
                                });
                            }
                        } catch (error) {
                            that.messages(error);
                        }
                    }
                });
            }
        }
    }
    /** 获取服务的契约 */
    protected getServiceProxies(): ibas.IServiceProxy<ibas.IServiceContract>[] {
        return [];
    }
}
/** 视图-应用程序功能 */
export interface IApplicationFunctionListView extends ibas.IBOListView {
    /** 编辑数据事件，参数：编辑对象 */
    editDataEvent: Function;
    /** 删除数据事件，参数：删除对象集合 */
    deleteDataEvent: Function;
    /** 显示数据 */
    showData(datas: bo.ApplicationFunction[]): void;
    /** 注册功能 */
    registerFunctionsEvent: Function;
}
