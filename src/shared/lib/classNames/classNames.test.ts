import { classNames } from './classNames'

describe('classnames', () => {
    test('with only first param', () => {
        expect(classNames('someCLass')).toBe('someCLass')
    })

    test('with additional class', () => {
        const expected = 'someCLass class1 class2'
        expect(classNames('someCLass', {}, ['class1', 'class2'])).toBe(expected)
    })

    test('with mods', () => {
        const expected = 'someCLass class1 class2 hovered scrollable'
        expect(
            classNames('someCLass', { hovered: true, scrollable: true }, [
                'class1',
                'class2',
            ]),
        ).toBe(expected)
    })
    test('with mods false', () => {
        const expected = 'someCLass class1 class2 hovered'
        expect(
            classNames('someCLass', { hovered: true, scrollable: false }, [
                'class1',
                'class2',
            ]),
        ).toBe(expected)
    })
})
