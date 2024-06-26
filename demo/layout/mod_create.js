document.write(`
<form action="" data-mod="create">
    <table class="form-table">
        <caption class="form-caption">Form by table layout</caption>
        <tbody>
        <tr>
            <th>Field Name:</th>
            <td>
                <input type="text" name="">
            </td>
        </tr>
        <tr>
            <th>Field Search:</th>
            <td>
                <input type="search" name="">
            </td>
        </tr>
        <tr>
            <th>Field Select:</th>
            <td>
                <select name="">
                    <option value="">Default</option>
                    <option value="">Opt1</option>
                    <option value="">Opt2</option>
                </select>
            </td>
        </tr>
        <tr>
            <th>Field File:</th>
            <td>
                <input type="file" name="">
            </td>
        </tr>
        <tr>
            <th>Field Text:</th>
            <td>
                <textarea></textarea>
            </td>
        </tr>
        <tr>
            <th>Field Radio:</th>
            <td>
                <label>
                    <input type="radio" name="radio"> Check1
                </label>
                <label>
                    <input type="radio" name="radio"> Check2
                </label>
                <label>
                    <input type="radio" name="radio"> Check3
                </label>
            </td>
        </tr>
        <tr>
            <th>Field Checkbox:</th>
            <td>
                <label>
                    <input type="checkbox" name="chk"> Check1
                </label>
                <label>
                    <input type="checkbox" name="chk"> Check2
                </label>
                <label>
                    <input type="checkbox" name="chk"> Check3
                </label>
            </td>
        </tr>
        <tr>
            <th>Field Name:</th>
            <td>
                <input type="text" name="">
            </td>
        </tr>
        <tr class="form-submit-row">
            <th></th>
            <td>
                <input type="submit">
                <input type="reset">
            </td>
        </tr>
    </table>
</form>`);