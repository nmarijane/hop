import {ChangeDetectionStrategy, Component, Input} from "@angular/core"
import {PaginationInstance} from 'ng2-pagination';

@Component({
    selector: 'my-pagination',
    templateUrl: './pagination.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class PaginationComponent {

    @Input('data') meals: string[] = [];

    public config: PaginationInstance = {
        id: 'custom',
        itemsPerPage: 10,
        currentPage: 1
    };
}
