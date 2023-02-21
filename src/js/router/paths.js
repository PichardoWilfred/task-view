//routes
import home from '../../views/home.html';
import task from '../../views/task-drawer.html';
import global from '../../views/global-search.html';
import navbar from '../../views/navbar.html';
import contractConfirm from '../../views/contract-confirm.html';
import customerView from '../../views/customer-view.html';
import looper from '../../views/looper.html';
import legacyCustomerView from '../../views/legacy-customer-view.html';
import legacy_formula from '../../views/legacy-formula.html';
import lexical_formula from '../../views/lexical-formula.html';

import files from '../../views/files/index.html';
import files_archives from '../../views/files/archives.html';
import files_detail from '../../views/files/_detail.html';
import files_deleted from '../../views/files/deleted.html';

const routes = {
    'home': home,
    'task-drawer': task,
    'global-search': global,
    'navbar': navbar,
    'legacy-customer-view': legacyCustomerView,
    'customer-view': customerView,
    'contract-confirm': contractConfirm,
    'files': {
        '/': files,
        'archives': files_archives,
        'deleted': files_deleted,
        ':id': files_detail
    },
    'looper': looper,
    'legacy-formula': legacy_formula,
    'lexical-formula': lexical_formula,
}
export { routes }