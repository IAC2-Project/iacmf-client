import { NgModule, ModuleWithProviders, SkipSelf, Optional } from '@angular/core';
import { Configuration } from './configuration';
import { HttpClient } from '@angular/common/http';

import { ComplianceIssueService } from './api/complianceIssue.service';
import { ComplianceJobService } from './api/complianceJob.service';
import { ComplianceRuleConfigurationService } from './api/complianceRuleConfiguration.service';
import { ComplianceRuleParameterService } from './api/complianceRuleParameter.service';
import { ComplianceRuleParameterAssignmentService } from './api/complianceRuleParameterAssignment.service';
import { ComplianceRulesService } from './api/complianceRules.service';
import { ExecutionService } from './api/execution.service';
import { FixingReportService } from './api/fixingReport.service';
import { IssueFixingConfigurationService } from './api/issueFixingConfiguration.service';
import { KeyValueService } from './api/keyValue.service';
import { PluginService } from './api/plugin.service';
import { PluginConfigurationService } from './api/pluginConfiguration.service';
import { PluginUsageService } from './api/pluginUsage.service';
import { PluginUsageInstanceService } from './api/pluginUsageInstance.service';
import { ProductionSystemService } from './api/productionSystem.service';
import { ProfileControllerService } from './api/profileController.service';
import { TriggerService } from './api/trigger.service';

@NgModule({
  imports:      [],
  declarations: [],
  exports:      [],
  providers: []
})
export class ApiModule {
    public static forRoot(configurationFactory: () => Configuration): ModuleWithProviders<ApiModule> {
        return {
            ngModule: ApiModule,
            providers: [ { provide: Configuration, useFactory: configurationFactory } ]
        };
    }

    constructor( @Optional() @SkipSelf() parentModule: ApiModule,
                 @Optional() http: HttpClient) {
        if (parentModule) {
            throw new Error('ApiModule is already loaded. Import in your base AppModule only.');
        }
        if (!http) {
            throw new Error('You need to import the HttpClientModule in your AppModule! \n' +
            'See also https://github.com/angular/angular/issues/20575');
        }
    }
}
