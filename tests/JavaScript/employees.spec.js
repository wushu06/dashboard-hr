import { mount } from 'vue-test-utils';
import expect from 'expect';
import List from '../../resources/js/views/employees/List.vue';

describe ('List', () => {


    it ('it allows adding user if is admin', () => {
        wrapper = mount(List, {
            mocks: {
                isAdmin:1
            }
        });
        expect(wrapper.html()).toContain('Employees:');
        expect(wrapper.html()).toContain('Add employee');
    });

    it ('it doesnt allow adding user if is not admin', () => {
        wrapper = mount(List, {
            mocks: {
                isAdmin:0
            }
        });
        expect(wrapper.html()).not.toContain('Add employee');
    });

    let wrapper;
    beforeEach (() => {
        wrapper = mount(List, {
            mocks: {
                isAdmin:1
            }
        });
    });
    it ('it shows title', () => {

        expect(wrapper.html()).toContain('Employees:');
    });
});
